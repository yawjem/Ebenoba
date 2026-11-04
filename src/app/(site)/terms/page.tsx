import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Prose } from "@/components/ui";
import { getSettings, seoFor } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/terms", { title: "Terms of Use", description: "The terms that apply when you use the Ebenoba website." });
}

export default async function Terms() {
  const { contact_email: email } = await getSettings();
  return (
    <>
      <PageHero title="Terms of Use" text="Last updated: 4 November 2026" />
      <Prose>
        <p>Welcome to Ebenoba. These Terms of Use (“Terms”) govern your use of the Ebenoba corporate website (the “Website”). By accessing or using the Website you agree to these Terms. If you do not agree, please do not use it.</p>

        <h2>1. About the Website and the Ebenoba application</h2>
        <p>This Website introduces Ebenoba, explains our services and lets you contact us. Buying and selling on the Ebenoba marketplace takes place in the Ebenoba application, which is governed by its own terms and marketplace policies. If these Terms conflict with the application’s terms for marketplace activity, the application’s terms apply to that activity.</p>

        <h2>2. Who may use the Website</h2>
        <p>You must be at least 18 years old, or have the consent of a parent or guardian, and be able to enter a binding agreement. If you use the Website on behalf of a business, you confirm you are authorised to bind it to these Terms.</p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use the Website unlawfully or to infringe the rights of others;</li>
          <li>submit false, misleading or defamatory information, or impersonate any person or business;</li>
          <li>send spam, malware or anything intended to disrupt or harm the Website or its users;</li>
          <li>attempt to gain unauthorised access to the Website, its servers or related systems;</li>
          <li>scrape, copy or harvest content or data by automated means without our written permission;</li>
          <li>use the Website in a way that could damage Ebenoba’s reputation or interfere with others’ use of it.</li>
        </ul>

        <h2>4. Intellectual property</h2>
        <p>The Website and its contents, including the Ebenoba name, logo, branding, text, graphics, images and design, are owned by or licensed to Ebenoba and protected by intellectual property laws. You may view and share pages for personal, non-commercial purposes, provided you keep all notices and do not alter the content. Any other use needs our prior written permission.</p>

        <h2>5. What you send us</h2>
        <p>When you send us an enquiry, proposal or other material through the Website, you confirm that it is accurate and that you have the right to share it. You give Ebenoba permission to use it to respond to you and to assess your request. Our use of personal data is explained in our <Link className="text-ember-600" href="/privacy">Privacy Policy</Link>. Please do not send confidential or sensitive information through the Website forms. Unsolicited ideas and proposals are not treated as confidential unless we agree in writing.</p>

        <h2>6. Information on the Website</h2>
        <p>We try to keep the Website accurate and up to date, but it is provided for general information only. Descriptions of services, features, commissions, subscriptions, delivery options and promotions are indicative and may change. Nothing on the Website is an offer capable of acceptance, or professional, legal or financial advice. Specific terms are confirmed when you register or transact through the Ebenoba application.</p>

        <h2>7. Third-party links and services</h2>
        <p>The Website may link to websites or services we do not control, including social media platforms. A link does not mean we endorse the third party. We are not responsible for their content, availability or practices, and you use them at your own risk.</p>

        <h2>8. Availability</h2>
        <p>We aim to keep the Website available but do not promise it will be uninterrupted or error-free. We may change, suspend or withdraw any part of it at any time, for example for maintenance.</p>

        <h2>9. Disclaimer</h2>
        <p>To the fullest extent permitted by law, the Website is provided “as is” and “as available”, without warranties of any kind, whether express or implied, including fitness for a particular purpose and non-infringement. We do not warrant that the Website is free from viruses or other harmful components.</p>

        <h2>10. Limitation of liability</h2>
        <p>To the fullest extent permitted by law, Ebenoba and its directors, employees and partners are not liable for any indirect, incidental, special or consequential loss, or for loss of profits, revenue, data or goodwill, arising from your use of or inability to use the Website. Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, including liability for fraud or for death or personal injury caused by negligence.</p>

        <h2>11. Indemnity</h2>
        <p>You agree to compensate Ebenoba for losses, claims and reasonable costs arising from your breach of these Terms or your unlawful use of the Website.</p>

        <h2>12. Suspension</h2>
        <p>We may restrict or block your access to the Website if we reasonably believe you have breached these Terms or are misusing it.</p>

        <h2>13. Changes to these Terms</h2>
        <p>We may update these Terms from time to time. The updated version applies from the date shown at the top of this page, and continued use of the Website means you accept it.</p>

        <h2>14. Governing law and disputes</h2>
        <p>These Terms are governed by the laws of the Republic of Ghana. We encourage you to contact us first so that we can try to resolve any concern informally. Any dispute that cannot be resolved informally is subject to the exclusive jurisdiction of the courts of Ghana, unless mandatory consumer law gives you the right to bring a claim elsewhere.</p>

        <h2>15. General</h2>
        <p>If any part of these Terms is found unenforceable, the rest remains in effect. Our failure to enforce a right is not a waiver of it. These Terms, together with our <Link className="text-ember-600" href="/privacy">Privacy Policy</Link> and <Link className="text-ember-600" href="/cookies">Cookie Policy</Link>, are the whole agreement between you and Ebenoba about the Website.</p>

        <h2>16. Contact</h2>
        <p>Questions about these Terms: <a className="text-ember-600" href={`mailto:${email}`}>{email}</a>, or use our <Link className="text-ember-600" href="/contact">contact form</Link>.</p>
      </Prose>
    </>
  );
}
