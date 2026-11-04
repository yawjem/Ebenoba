import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { PageHero, Prose } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/accessibility", { title: "Accessibility Statement", description: "Ebenoba's commitment to an accessible website." });
}

export default function Page() {
  return (
    <>
      <PageHero title="Accessibility Statement" text="Last updated: November 2026. Draft for legal review before launch." />
      <Prose>
        <h2>Our commitment</h2><p>We aim to make this website usable by everyone, including people using assistive technology.</p>
        <h2>Feedback</h2><p>If you find a barrier, please tell us and we will work to fix it.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a className="text-ember-600" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </Prose>
    </>
  );
}
