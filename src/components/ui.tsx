import Link from "next/link";
import type { ReactNode } from "react";

export function Section({ id, title, intro, children, tint = false }: { id?: string; title?: string; intro?: string; children: ReactNode; tint?: boolean }) {
  return (
    <section id={id} className={tint ? "bg-ember-50/60" : ""}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        {title && <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>}
        {intro && <p className="mt-3 max-w-2xl text-ink/70">{intro}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function PageHero({ title, text, children }: { title: string; text?: string; children?: ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-ember-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h1 className="fade-up max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className="fade-up mt-4 max-w-2xl text-lg text-ink/70">{text}</p>}
        {children && <div className="fade-up mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}

export function Cards({ items, cols = 3 }: { items: { title: string; text?: string }[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-5 ${grid}`}>
      {items.map((i) => (
        <div key={i.title} className="card">
          <span className="mb-3 block h-1.5 w-8 rounded-full bg-ember-600" />
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
      <div className="rounded-3xl bg-gradient-to-r from-ember-700 to-ember-500 p-8 text-white sm:p-12">
        <h2 className="text-3xl font-extrabold">{title}</h2>
        <p className="mt-3 max-w-xl text-white/90">{text}</p>
        <Link href={href} className="btn btn-light mt-6">{label}</Link>
      </div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl space-y-4 px-4 py-14 leading-relaxed text-ink/80 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-6">{children}</div>;
}
