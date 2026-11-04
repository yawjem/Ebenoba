import type { Metadata } from "next";
import { getFaqs, seoFor } from "@/lib/content";
import { PageHero, Section } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/faqs", { title: "FAQs", description: "Answers to common questions about shopping and selling on Ebenoba." });
}

export default async function Faqs() {
  const FAQS = await getFaqs();
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <PageHero title="Frequently asked questions" />
      <Section>
        <div className="max-w-3xl divide-y divide-ember-100">
          {FAQS.map((f) => (<details key={f.q} className="py-4"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-ink/70">{f.a}</p></details>))}
        </div>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
