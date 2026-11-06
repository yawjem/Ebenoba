import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Prose } from "@/components/ui";
import { getSettings, seoFor } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/accessibility", { title: "Accessibility Statement", description: "Ebenoba's commitment to making its website usable by everyone, the measures we take and how to report a problem." });
}

export default async function Accessibility() {
  const { contact_email: email, contact_phone: phone } = await getSettings();
  return (
    <>
      <PageHero title="Accessibility Statement" text="Last updated: 6 November 2026" />
      <Prose>
        <p>Ebenoba wants everyone to be able to use this website, including people with visual, hearing, motor or cognitive disabilities and people using assistive technology or slower connections.</p>

        <h2>Our standard</h2>
        <p>We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. We have not yet had the website independently audited, so we describe this as our target rather than a guarantee of full conformance.</p>

        <h2>What we do</h2>
        <ul>
          <li>Use clear headings, landmarks and semantic markup so screen readers can navigate each page.</li>
          <li>Make the website usable by keyboard, with visible focus states and a mobile menu that can be operated without a mouse.</li>
          <li>Choose text and background colours with strong contrast, and do not rely on colour alone to convey meaning.</li>
          <li>Provide text alternatives for meaningful images, and mark purely decorative images so they are skipped.</li>
          <li>Label form fields and show clear error and success messages.</li>
          <li>Design for any screen size, from phones to large monitors, and allow text to be enlarged.</li>
          <li>Respect the “reduce motion” setting in your device, switching off non-essential animation.</li>
        </ul>

        <h2>Known limitations</h2>
        <ul>
          <li>Some images, such as promotional banners, contain text inside the picture. We describe them in the alternative text, but the wording may be shorter than the original.</li>
          <li>Third-party services we link to, such as social media and the Ebenoba application, are outside this website and have their own accessibility standards.</li>
        </ul>

        <h2>Tell us about a problem</h2>
        <p>If you find something hard to use, or need information in a different format, please tell us the page, what went wrong and the device or assistive technology you use. Email <a className="text-ember-600" href={`mailto:${email}`}>{email}</a>, call {phone}, or use our <Link className="text-ember-600" href="/contact">contact form</Link>. We aim to reply within 5 working days and to fix reported problems as quickly as we reasonably can.</p>

        <h2>Ongoing improvement</h2>
        <p>Accessibility is part of how we build and update the website. We will review this statement when we make significant changes.</p>
      </Prose>
    </>
  );
}
