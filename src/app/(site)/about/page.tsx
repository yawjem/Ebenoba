import type { Metadata } from "next";
import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import { getSettings, seoFor } from "@/lib/content";
import { Cards, PageHero, Section } from "@/components/ui";


function LogoBand() {
  return (
    <section className="bg-white" aria-label="Ebenoba logo">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-12">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ember-200" aria-hidden="true" />
        <Image src="/logo.png" alt="Ebenoba: Everything Commerce. Simplified." width={800} height={699} className="h-40 w-auto sm:h-52" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ember-200" aria-hidden="true" />
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/about", { title: "About Ebenoba", description: "Learn who Ebenoba is, what we believe and how we connect businesses and consumers in one marketplace." });
}

export default async function About() {
  const c = await getSettings();
  return (
    <>
      <PageHero tone="gold" title="Making Commerce Simpler. Connecting Opportunities." text="Ebenoba is a digital commerce platform built around one simple idea: making it easier for people to discover businesses, find products and connect with sellers, while giving businesses new opportunities to reach customers and grow." aside={<Gallery />} />
      <LogoBand />
      <Section title="Our story" intro="A better way to connect commerce.">
        <div className="max-w-3xl space-y-4 text-ink/80">{c.about_story.split("\n\n").map((t, i) => <p key={i}>{t}</p>)}</div>
      </Section>
      <Section title="About Ebenoba" tone="cream">
        <div className="max-w-3xl space-y-4 text-ink/80">{c.about_who.split("\n\n").map((t, i) => <p key={i}>{t}</p>)}</div>
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card !border-0 bg-ember-600 text-white"><h2 className="text-xl font-bold text-gold-400">Our mission</h2><p className="mt-2">{c.about_mission}</p></div>
          <div className="card !border-0 bg-night text-white"><h2 className="text-xl font-bold text-gold-400">Our vision</h2><p className="mt-2">{c.about_vision}</p></div>
        </div>
      </Section>
      <Section title="Our values" tone="gold">
        <Cards cols={4} items={[{ title: "Accessibility" }, { title: "Convenience" }, { title: "Trust" }, { title: "Growth" }]} />
      </Section>
      <Section title="What we're solving">
        <Cards cols={2} items={[
          { title: "Scattered shopping", text: "Products and businesses are hard to find in one place." },
          { title: "Limited reach", text: "Many businesses struggle to be discovered online." },
          { title: "Complex orders", text: "Ordering, tracking and delivery are often disconnected." },
          { title: "Growth barriers", text: "Small businesses lack simple marketing and analytics tools." },
        ]} />
      </Section>
      <Section title="How we empower businesses and shoppers" tone="leaf">
        <Cards cols={2} items={[
          { title: "For businesses", text: "Storefronts, exposure, promotions, order management and performance insights." },
          { title: "For shoppers", text: "Diverse selections, comparable offers, promotions and trackable delivery." },
        ]} />
      </Section>
      <Section title="Our long-term ambitions"><p className="max-w-3xl whitespace-pre-line text-ink/80">{c.about_ambitions}</p></Section>
    </>
  );
}
