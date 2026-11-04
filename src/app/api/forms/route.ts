import { NextResponse } from "next/server";

const LABELS: Record<string, string> = {
  contact: "Contact enquiry", seller: "Seller enquiry", partner: "Partnership proposal", newsletter: "Newsletter signup",
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  // Spam protection: honeypot field. Pretend success so bots learn nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const type = String(body.type || "");
  if (!LABELS[type]) return NextResponse.json({ ok: false }, { status: 400 });
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) if (k !== "type" && k !== "website" && typeof v === "string") fields[k.slice(0, 40)] = v.trim().slice(0, 5000);
  if (fields.email && !/^\S+@\S+\.\S+$/.test(fields.email)) return NextResponse.json({ ok: false }, { status: 400 });

  // Emails are sent through Resend when RESEND_API_KEY is set. Otherwise the submission is only logged.
  const key = process.env.RESEND_API_KEY;
  if (!key) { console.log("Form submission (RESEND_API_KEY not set):", type, fields); return NextResponse.json({ ok: true }); }

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
  const html = `<h2>${LABELS[type]}</h2>` + Object.entries(fields).map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Ebenoba <no-reply@ebenoba.com>",
      to: [process.env.CONTACT_TO_EMAIL || "hello@ebenoba.com"],
      ...(fields.email ? { reply_to: fields.email } : {}),
      subject: `[Ebenoba] ${LABELS[type]}`,
      html,
    }),
  });
  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
