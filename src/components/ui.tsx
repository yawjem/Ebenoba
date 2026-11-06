import Link from "next/link";
import type { ReactNode } from "react";

export type Tone = "white" | "cream" | "ember" | "gold" | "leaf" | "dark";

const SECTION: Record<Tone, { bg: string; title: string; intro: string; bar: string }> = {
  white: { bg: "", title: "", intro: "text-ink/70", bar: "bg-ember-600" },
  cream: { bg: "bg-cream", title: "", intro: "text-ink/70", bar: "bg-ember-600" },
  ember: { bg: "bg-ember-50", title: "", intro: "text-ink/70", bar: "bg-ember-600" },
  gold: { bg: "bg-gold-50", title: "", intro: "text-ink/70", bar: "bg-gold-500" },
  leaf: { bg: "bg-leaf-50", title: "", intro: "text-ink/70", bar: "bg-leaf-600" },
  dark: { bg: "bg-night text-white", title: "text-white", intro: "text-white/70", bar: "bg-gold-400" },
};

export function Section({ id, title, intro, children, tint = false, tone }: { id?: string; title?: string; intro?: string; children: ReactNode; tint?: boolean; tone?: Tone }) {
  const t = SECTION[tone ?? (tint ? "cream" : "white")];
  return (
    <section id={id} className={t.bg}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        {title && (
          <>
            <span className={`mb-3 block h-1 w-12 rounded-full ${t.bar}`} />
            <h2 className={`text-3xl font-extrabold tracking-tight ${t.title}`}>{title}</h2>
          </>
        )}
        {intro && <p className={`mt-3 max-w-2xl ${t.intro}`}>{intro}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

const HERO: Record<string, { bg: string; blob: string }> = {
  ember: { bg: "bg-gradient-to-br from-ember-50 via-white to-white", blob: "bg-gold-400/25" },
  gold: { bg: "bg-gradient-to-br from-gold-100 via-gold-50 to-white", blob: "bg-ember-500/15" },
  leaf: { bg: "bg-gradient-to-br from-leaf-100 via-leaf-50 to-white", blob: "bg-gold-400/30" },
  dark: { bg: "bg-night text-white on-dark", blob: "bg-ember-500/30" },
};

export function PageHero({ title, text, children, tone = "ember" }: { title: string; text?: string; children?: ReactNode; tone?: "ember" | "gold" | "leaf" | "dark" }) {
  const h = HERO[tone];
  return (
    <div className={`relative overflow-hidden ${h.bg}`}>
      <div className={`pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full ${h.blob}`} aria-hidden="true" />
      <div className={`pointer-events-none absolute -bottom-24 right-1/4 h-48 w-48 rounded-full ${tone === "dark" ? "bg-gold-400/15" : "bg-ember-600/10"}`} aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h1 className="fade-up max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className={`fade-up mt-4 max-w-2xl text-lg ${tone === "dark" ? "text-white/80" : "text-ink/70"}`}>{text}</p>}
        {children && <div className="fade-up mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}

// Cards rotate through the brand accents so grids never look flat.
const ACCENTS = ["border-t-ember-600", "border-t-gold-500", "border-t-leaf-600", "border-t-night"];

export function Cards({ items, cols = 3 }: { items: { title: string; text?: string }[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-5 ${grid}`}>
      {items.map((i, n) => (
        <div key={i.title} className={`card border-t-4 ${ACCENTS[n % ACCENTS.length]}`}>
          <h3 className="font-bold">{i.title}</h3>
          {i.text && <p className="mt-2 text-sm text-ink/70">{i.text}</p>}
        </div>
      ))}
    </div>
  );
}

export function Banner({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ember-700 to-ember-500 p-8 text-white sm:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-400/30" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 right-32 h-40 w-40 rounded-full bg-white/10" aria-hidden="true" />
        <h2 className="relative text-3xl font-extrabold">{title}</h2>
        <p className="relative mt-3 max-w-xl text-white/90">{text}</p>
        <Link href={href} className="btn btn-gold relative mt-6">{label}</Link>
      </div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl space-y-4 px-4 py-14 leading-relaxed text-ink/80 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-6">{children}</div>;
}
