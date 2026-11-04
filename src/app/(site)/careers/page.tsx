import Link from "next/link";
import type { Metadata } from "next";
import { getSettings, seoFor } from "@/lib/content";
import { Cards, PageHero, Section } from "@/components/ui";


export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/careers", { title: "Careers", description: "Work with Ebenoba. Learn about our culture, open positions and internships." });
}

export default async function Careers() {
  const { contact_email: email } = await getSettings();
  return (
    <>
      <PageHero title="Careers at Ebenoba" text="Help us build a marketplace that simplifies commerce." />
      <Section title="Working with Ebenoba" tint><Cards cols={2} items={[{ title: "Our culture", text: "Collaborative, curious and focused on helping businesses and shoppers succeed." }, { title: "Internships", text: "We welcome internship interest. Send us your details." }]} /></Section>
      <Section title="Available positions">
        <p className="rounded-2xl border border-dashed border-ember-200 p-8 text-ink/70">There are no open positions right now. Please check back soon.</p>
      </Section>
      <Section title="How to apply" tint>
        <p className="max-w-2xl text-ink/80">Send your CV and a short note to <a className="text-ember-600" href={`mailto:${email}`}>{email}</a>, or use the <Link href="/contact" className="text-ember-600">contact form</Link>.</p>
      </Section>
    </>
  );
}
