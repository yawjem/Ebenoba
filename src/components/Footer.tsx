import Link from "next/link";
import { FOOTER } from "@/lib/site";
import { getSettings, socialsFrom } from "@/lib/content";
import { Logo } from "./Header";
import { Form } from "./Form";

export default async function Footer() {
  const socials = socialsFrom(await getSettings());
  return (
    <footer className="border-t-4 border-gold-400 bg-ember-900 text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_3fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm">Everything Commerce. Simplified.</p>
            <div className="mt-6 max-w-xs">
              <p className="mb-2 text-sm font-semibold text-white">Get news and promotions</p>
              <Form type="newsletter" compact submitLabel="Subscribe" fields={[{ name: "email", label: "Email address", type: "email", required: true }]} />
            </div>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-4 text-sm">
                {socials.map((s) => (<a key={s.name} href={s.href} className="hover:text-white" rel="noopener noreferrer" target="_blank">{s.name}</a>))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">{col.title}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map(([label, href]) => (
                    <li key={label}><Link href={href} className="hover:text-white">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-xs">© {new Date().getFullYear()} Ebenoba. All rights reserved. Website by ASE studio.</p>
      </div>
    </footer>
  );
}
