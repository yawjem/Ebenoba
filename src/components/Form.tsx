"use client";
import { useState } from "react";

type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "textarea" | "select"; required?: boolean; options?: string[] };

export function Form({ type, fields, submitLabel = "Send", compact = false, defaults = {} }: {
  type: string; fields: Field[]; submitLabel?: string; compact?: boolean; defaults?: Record<string, string>;
}) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/forms", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type, ...data }) });
      setState(res.ok ? "ok" : "err");
      if (res.ok) e.currentTarget.reset();
    } catch { setState("err"); }
  }

  if (state === "ok") return <p role="status" className="rounded-xl bg-ember-50 p-4 text-ember-700">Thank you, we've received your submission.</p>;

  return (
    <form onSubmit={onSubmit} className={compact ? "flex gap-2" : "grid gap-4"}>
      {/* Honeypot: bots fill this, humans never see it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" />
      {fields.map((f) => (
        <label key={f.name} className={compact ? "flex-1" : "block text-sm font-medium"}>
          {compact ? <span className="sr-only">{f.label}</span> : f.label}
          {f.type === "textarea" ? (
            <textarea name={f.name} required={f.required} rows={5} className="input mt-1" />
          ) : f.type === "select" ? (
            <select name={f.name} required={f.required} defaultValue={defaults[f.name] || ""} className="input mt-1">
              <option value="" disabled>Select…</option>
              {f.options?.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : (
            <input name={f.name} type={f.type || "text"} required={f.required} placeholder={compact ? f.label : undefined} className={compact ? "input !text-ink" : "input mt-1"} />
          )}
        </label>
      ))}
      <button className="btn btn-primary" disabled={state === "sending"}>{state === "sending" ? "Sending…" : submitLabel}</button>
      {state === "err" && <p role="alert" className="text-sm text-ember-500">Something went wrong. Please try again.</p>}
    </form>
  );
}
