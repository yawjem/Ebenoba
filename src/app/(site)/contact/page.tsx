import type { Metadata } from "next";
import { getSettings, seoFor, socialsFrom } from "@/lib/content";
import { PageHero, Section } from "@/components/ui";
import { Form } from "@/components/Form";
import { CONTACT } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/contact", { title: "Contact Us", description: "Get in touch with Ebenoba for shopping help, seller registration, partnerships, advertising or support." });
}

const CATS = ["General enquiries", "Shopping assistance", "Seller registration", "Business partnerships", "Advertising", "Complaints", "Technical assistance", "Feedback"];

export default async function Contact({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const c = await getSettings();
  const socials = socialsFrom(c);
  return (
    <>
      <PageHero title="Contact us" text="We'd love to hear from you." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-3 text-ink/80">
            <h2 className="text-xl font-bold text-ink">{CONTACT.name}</h2>
            <p>Email: <a className="text-ember-600" href={`mailto:${c.contact_email}`}>{c.contact_email}</a></p>
            <p>Phone: {c.contact_phone}</p>
            <p>WhatsApp: <a className="text-ember-600" href={c.contact_whatsapp} rel="noopener noreferrer">Chat with us</a></p>
            <p>Address: {c.contact_address}</p>
            <p>Hours: {c.contact_hours}</p>
            <p className="flex gap-4">{socials.map((s) => <a key={s.name} href={s.href} className="text-ember-600" rel="noopener noreferrer" target="_blank">{s.name}</a>)}</p>
          </div>
          <Form type="contact" submitLabel="Send message" defaults={{ category: type && CATS.includes(type) ? type : "" }} fields={[
            { name: "name", label: "Full name", required: true }, { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone number", type: "tel" },
            { name: "category", label: "Enquiry category", type: "select", options: CATS, required: true },
            { name: "subject", label: "Subject", required: true }, { name: "message", label: "Message", type: "textarea", required: true },
          ]} />
        </div>
      </Section>
    </>
  );
}
