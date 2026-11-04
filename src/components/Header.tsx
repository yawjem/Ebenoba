"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV, SELLER_URL } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Ebenoba home" className={light ? "inline-block rounded-xl bg-white p-2" : "block"}>
      <Image src="/logo.png" alt="Ebenoba: Everything Commerce. Simplified." width={800} height={699} priority className={light ? "h-16 w-auto" : "h-14 w-auto"} />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ember-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-ink/80 hover:text-ember-600">{n.label}</Link>
          ))}
          <Link href={SELLER_URL} className="btn btn-primary !py-2 text-sm">Join Ebenoba</Link>
        </nav>
        <button className="lg:hidden rounded-lg p-2 text-ink" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-ember-100 bg-white px-4 pb-4 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-ink/80">{n.label}</Link>
          ))}
          <Link href={SELLER_URL} onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">Join Ebenoba</Link>
        </nav>
      )}
    </header>
  );
}
