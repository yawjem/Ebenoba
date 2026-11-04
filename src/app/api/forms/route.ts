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
  if (type === "newsletter" && !fields.email) return NextResponse.json({ ok: false }, { status: 400 });

  // Brevo (https://www.brevo.com). Without BREVO_API_KEY the submission is only logged (fine for local testing).
  const key = process.env.BREVO_API_KEY;
  if (!key) { console.log("Form submission (BREVO_API_KEY not set):", type, fields); return NextResponse.json({ ok: true }); }
  const headers = { "api-key": key, "Content-Type": "application/json", accept: "application/json" };

  // Newsletter signups go straight into a Brevo contact list.
  if (type === "newsletter") {
    const listId = Number(process.env.BREVO_LIST_ID);
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST", headers,
      body: JSON.stringify({ email: fields.email, updateEnabled: true, ...(listId ? { listIds: [listId] } : {}) }),
    });
    return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
  }

  // Enquiries are emailed to the Ebenoba team; replying goes to the person who wrote in.
  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
  const htmlContent = `<h2>${LABELS[type]}</h2>` + Object.entries(fields).map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join("");
  const to = process.env.CONTACT_TO_EMAIL || "ebenoba56@gmail.com";
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST", headers,
    body: JSON.stringify({
      sender: { name: process.env.CONTACT_FROM_NAME || "Ebenoba Website", email: process.env.CONTACT_FROM_EMAIL || to },
      to: [{ email: to }],
      ...(fields.email ? { replyTo: { email: fields.email, name: fields.name || undefined } } : {}),
      subject: `[Ebenoba] ${LABELS[type]}`,
      htmlContent,
    }),
  });
  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
