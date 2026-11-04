import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { Cards, PageHero, Section } from "@/components/ui";
import { Form } from "@/components/Form";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/partnerships", { title: "Business Partnerships", description: "Partner with Ebenoba: retailers, wholesalers, logistics, payments, advertising and technology." });
}

const TYPES = ["Retail business", "Wholesaler", "Logistics company", "Payment provider", "Advertising agency", "Corporate organization", "Technology partner"];

export default function Partnerships() {
  return (
    <>
      <PageHero title="Partner with Ebenoba" text="We work with organizations that help us serve buyers and businesses better." />
      <Section title="Who we partner with"><Cards cols={4} items={TYPES.map((title) => ({ title }))} /></Section>
      <Section id="proposal" title="Partnership proposal" tint>
        <div className="max-w-xl">
          <Form type="partner" submitLabel="Submit proposal" fields={[
            { name: "name", label: "Contact name", required: true }, { name: "organization", label: "Organization", required: true },
            { name: "partnerType", label: "Partner type", type: "select", options: TYPES, required: true },
            { name: "email", label: "Email", type: "email", required: true }, { name: "phone", label: "Phone", type: "tel" },
            { name: "message", label: "Your proposal", type: "textarea", required: true },
          ]} />
        </div>
      </Section>
    </>
  );
}
