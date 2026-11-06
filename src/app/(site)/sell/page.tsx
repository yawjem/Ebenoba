import Link from "next/link";
import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { Cards, PageHero, Section } from "@/components/ui";
import { Form } from "@/components/Form";
import { SELLER_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/sell", { title: "Sell on Ebenoba", description: "Open an online storefront, reach more customers and grow your business on Ebenoba." });
}

const faqs = [
  ["Who can sell?", "Registered businesses and individual sellers who meet the requirements below."],
  ["What does it cost?", "Commission and subscription details will be confirmed here. Send an enquiry for current terms."],
  ["How long does registration take?", "Registration is quick; approval timelines will be confirmed by the Ebenoba team."],
];

export default function Sell() {
  return (
    <>
      <PageHero tone="dark" title="Sell on Ebenoba" text="Are you a Ghanaian entrepreneur, a business owner or a trader looking to scale up your brand and improve visibility? Join the Ebenoba Force.">
        <Link href={SELLER_URL} className="btn btn-primary">Join the Ebenoba Force</Link>
      </PageHero>
      <Section id="benefits" title="Why sell on Ebenoba?">
        <Cards items={[
          { title: "Reach more customers", text: "Get discovered alongside many other businesses." },
          { title: "Showcase your products", text: "A storefront that presents your range well." },
          { title: "Manage orders easily", text: "Handle orders and delivery coordination in one place." },
          { title: "Track performance", text: "Monitor how your business is doing." },
          { title: "Promotional opportunities", text: "Join marketplace campaigns." },
          { title: "Grow with us", text: "Tools and exposure that scale with you." },
        ]} />
      </Section>
      <Section title="How it works" tone="cream">
        <Cards items={[{ title: "1. Register", text: "Create your seller account." }, { title: "2. List products", text: "Set up your storefront." }, { title: "3. Sell and deliver", text: "Receive orders and fulfil them." }]} />
      </Section>
      <Section title="Commission and requirements" tone="gold">
        <Cards cols={2} items={[
          { title: "Commission", text: "Ebenoba charges a commission on each sale. The rate is dynamic and ranges from 9% to 20% depending on the product category." },
          { title: "Requirements", text: "Business details, product information and contact details." },
        ]} />
      </Section>
      <Section id="enquiry" title="Seller enquiry" intro="Want to know more before registering? Send us your details." tone="leaf">
        <div className="max-w-xl">
          <Form type="seller" submitLabel="Send enquiry" fields={[
            { name: "name", label: "Full name", required: true }, { name: "business", label: "Business name", required: true },
            { name: "email", label: "Email", type: "email", required: true }, { name: "phone", label: "Phone", type: "tel" },
            { name: "message", label: "Tell us about your business", type: "textarea" },
          ]} />
        </div>
      </Section>
      <Section title="Seller FAQs">
        <div className="max-w-3xl divide-y divide-ember-100">
          {faqs.map(([q, a]) => (<details key={q} className="py-4"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-2 text-ink/70">{a}</p></details>))}
        </div>
      </Section>
    </>
  );
}
