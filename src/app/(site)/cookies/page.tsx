import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { PageHero, Prose } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/cookies", { title: "Cookie Policy", description: "How Ebenoba uses cookies and analytics." });
}

export default function Page() {
  return (
    <>
      <PageHero title="Cookie Policy" text="Last updated: November 2026. Draft for legal review before launch." />
      <Prose>
        <h2>What are cookies</h2><p>Small files stored on your device to make websites work and measure use.</p>
        <h2>How we use them</h2><p>Essential cookies for site function and Google Analytics cookies to understand traffic, when enabled.</p>
        <h2>Managing cookies</h2><p>You can block or delete cookies in your browser settings.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a className="text-ember-600" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </Prose>
    </>
  );
}
