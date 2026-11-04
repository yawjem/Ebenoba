import type { Metadata } from "next";
import { getSettings, seoFor } from "@/lib/content";
import { Cards, PageHero, Section } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/about", { title: "About Ebenoba", description: "Learn who Ebenoba is, what we believe and how we connect businesses and consumers in one marketplace." });
}

export default async function About() {
  const c = await getSettings();
  return (
    <>
      <PageHero title="About Ebenoba" text="A connected digital marketplace built to simplify commerce for buyers and businesses." />
      <Section title="Our story"><p className="max-w-3xl whitespace-pre-line text-ink/80">{c.about_story}</p></Section>
      <Section title="Who we are" tint><p className="max-w-3xl whitespace-pre-line text-ink/80">{c.about_who}</p></Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card"><h2 className="text-xl font-bold text-ember-600">Our mission</h2><p className="mt-2">{c.about_mission}</p></div>
          <div className="card"><h2 className="text-xl font-bold text-ember-600">Our vision</h2><p className="mt-2">{c.about_vision}</p></div>
        </div>
      </Section>
      <Section title="Our values" tint>
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
      <Section title="How we empower businesses and shoppers" tint>
        <Cards cols={2} items={[
          { title: "For businesses", text: "Storefronts, exposure, promotions, order management and performance insights." },
          { title: "For shoppers", text: "Diverse selections, comparable offers, promotions and trackable delivery." },
        ]} />
      </Section>
      <Section title="Our long-term ambitions"><p className="max-w-3xl whitespace-pre-line text-ink/80">{c.about_ambitions}</p></Section>
    </>
  );
}
