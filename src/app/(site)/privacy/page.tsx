import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Prose } from "@/components/ui";
import { getSettings, seoFor } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/privacy", { title: "Privacy Policy", description: "How Ebenoba collects, uses, shares and protects your personal data, and the rights you have over it." });
}

export default async function Privacy() {
  const { contact_email: email } = await getSettings();
  return (
    <>
      <PageHero title="Privacy Policy" text="Last updated: 4 November 2026" />
      <Prose>
        <p>This Privacy Policy explains how Ebenoba (“Ebenoba”, “we”, “us”) collects, uses, shares and protects personal information when you visit our corporate website and interact with us through it. It applies to this website only. Shopping, ordering, payments and delivery happen in the Ebenoba application, which has its own marketplace policies.</p>

        <h2>1. Who is responsible for your data</h2>
        <p>Ebenoba is the data controller for personal data collected through this website. You can reach us at <a className="text-ember-600" href={`mailto:${email}`}>{email}</a> for anything related to your data.</p>

        <h2>2. Information we collect</h2>
        <p><strong>Information you give us</strong></p>
        <ul>
          <li><strong>Contact form:</strong> full name, email, phone number, enquiry category, subject and message.</li>
          <li><strong>Seller enquiry form:</strong> name, business name, email, phone and a description of your business.</li>
          <li><strong>Partnership proposal form:</strong> name, organisation, partner type, email, phone and your proposal.</li>
          <li><strong>Newsletter:</strong> your email address.</li>
          <li><strong>Correspondence:</strong> anything you send us by email, WhatsApp or other channels, including job applications and CVs.</li>
        </ul>
        <p><strong>Information collected automatically</strong></p>
        <ul>
          <li>Device and browser type, operating system, language and screen size.</li>
          <li>Pages visited, time spent, referring website and approximate location (country or city level) derived from your IP address.</li>
          <li>Cookie and similar identifiers, described in our <Link className="text-ember-600" href="/cookies">Cookie Policy</Link>.</li>
        </ul>
        <p>We do not intentionally collect sensitive personal data through this website. Please do not include it in your messages.</p>

        <h2>3. How and why we use your information</h2>
        <ul>
          <li><strong>To respond to you:</strong> answering enquiries, handling seller and partnership requests and giving support. (Our legitimate interests, and steps you ask us to take.)</li>
          <li><strong>To send our newsletter:</strong> news, features and promotions, only if you subscribe. (Your consent, which you can withdraw at any time.)</li>
          <li><strong>To run and improve the website:</strong> measuring traffic, fixing errors and improving content. (Our legitimate interests, and your consent where analytics cookies require it.)</li>
          <li><strong>To keep the website secure:</strong> preventing spam, abuse and fraud. (Our legitimate interests.)</li>
          <li><strong>To meet legal obligations</strong> and to establish, exercise or defend legal claims.</li>
        </ul>
        <p>We do not sell your personal data.</p>

        <h2>4. Who we share it with</h2>
        <p>We share personal data only with service providers that help us run the website, under appropriate safeguards, and only as needed:</p>
        <ul>
          <li><strong>Hosting and infrastructure</strong> (for example Vercel) to deliver the website.</li>
          <li><strong>Email delivery and newsletters</strong> (Brevo) to send form submissions to our team and to manage and send our newsletter.</li>
          <li><strong>Analytics</strong> (Google Analytics, when enabled) to understand how the website is used.</li>
          <li><strong>Professional advisers, regulators and law enforcement</strong> where we are legally required or need to protect our rights.</li>
          <li><strong>A successor organisation</strong> if Ebenoba is involved in a merger, acquisition or restructuring, with notice to you where required.</li>
        </ul>

        <h2>5. International transfers</h2>
        <p>Some of our service providers operate outside your country, including in the United States and Europe. Where your data is transferred internationally, we take steps to ensure it is protected to a standard consistent with applicable data protection law.</p>

        <h2>6. How long we keep your data</h2>
        <ul>
          <li><strong>Enquiries and correspondence:</strong> up to 24 months after the matter is closed, unless we need to keep them longer to meet legal obligations or resolve a dispute.</li>
          <li><strong>Newsletter subscriptions:</strong> until you unsubscribe.</li>
          <li><strong>Job applications:</strong> up to 12 months, unless you ask us to remove them sooner.</li>
          <li><strong>Analytics data:</strong> according to the retention settings of our analytics provider, typically up to 14 months.</li>
        </ul>

        <h2>7. How we protect your data</h2>
        <p>We use reasonable technical and organisational measures, including encrypted connections (HTTPS), access controls and spam protection on our forms. No online service is completely secure, so we cannot guarantee absolute security. If a breach affects your rights, we will notify you and the relevant authority as the law requires.</p>

        <h2>8. Your rights</h2>
        <p>Subject to applicable law, including Ghana’s Data Protection Act, 2012 (Act 843), you may:</p>
        <ul>
          <li>ask whether we hold personal data about you and request a copy;</li>
          <li>ask us to correct inaccurate or incomplete data;</li>
          <li>ask us to delete your data where we no longer need it;</li>
          <li>object to or ask us to restrict certain processing, including direct marketing;</li>
          <li>withdraw consent at any time, for example by using the unsubscribe link in any newsletter.</li>
        </ul>
        <p>To use any of these rights, email <a className="text-ember-600" href={`mailto:${email}`}>{email}</a>. We may need to verify your identity first. We aim to respond within 30 days. If you are unhappy with how we handle your data, you can complain to us or to the Data Protection Commission of Ghana.</p>

        <h2>9. Children</h2>
        <p>This website is not directed at children under 18, and we do not knowingly collect their personal data. If you believe a child has given us personal data, contact us and we will delete it.</p>

        <h2>10. Links to other websites</h2>
        <p>Our website may link to third-party sites, including social media and the Ebenoba application. We are not responsible for their privacy practices, so please read their policies.</p>

        <h2>11. Changes to this policy</h2>
        <p>We may update this policy from time to time. The “last updated” date above shows when it last changed. Where changes are significant, we will take reasonable steps to tell you.</p>

        <h2>12. Contact us</h2>
        <p>Questions about this policy or your data: <a className="text-ember-600" href={`mailto:${email}`}>{email}</a>, or use our <Link className="text-ember-600" href="/contact">contact form</Link>.</p>
      </Prose>
    </>
  );
}
