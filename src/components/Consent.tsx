"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "ebenoba-consent";
type Choice = "unknown" | "granted" | "denied";

/** Google Analytics loads only after the visitor accepts. With no GA ID configured, nothing loads and no banner shows. */
export default function Consent({ gaId }: { gaId?: string }) {
  const [choice, setChoice] = useState<Choice>("denied"); // render nothing until we have read the stored choice

  useEffect(() => {
    const read = () => {
      try { const v = localStorage.getItem(KEY); setChoice(v === "granted" || v === "denied" ? v : "unknown"); } catch { setChoice("unknown"); }
    };
    read();
    window.addEventListener("ebenoba-consent-reset", read);
    return () => window.removeEventListener("ebenoba-consent-reset", read);
  }, []);

  if (!gaId) return null;
  const save = (v: Choice) => { try { localStorage.setItem(KEY, v); } catch {} setChoice(v); };

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
        </>
      )}
      {choice === "unknown" && (
        <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-ember-100 bg-white p-5 shadow-2xl sm:flex sm:items-center sm:gap-6">
          <p className="text-sm text-ink/80">We use analytics cookies to understand how the website is used and improve it. They are only set if you accept. See our <Link href="/cookies" className="font-semibold text-ember-600 underline">Cookie Policy</Link>.</p>
          <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
            <button onClick={() => save("denied")} className="btn btn-outline !px-4 !py-2 text-sm">Decline</button>
            <button onClick={() => save("granted")} className="btn btn-primary !px-4 !py-2 text-sm">Accept</button>
          </div>
        </div>
      )}
    </>
  );
}
