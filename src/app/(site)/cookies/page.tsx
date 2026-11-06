import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Prose } from "@/components/ui";
import CookieSettings from "@/components/CookieSettings";
import { getSettings, seoFor } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/cookies", { title: "Cookie Policy", description: "How Ebenoba uses cookies and similar technologies on its website, and how you can control them." });
}

export default async function Cookies() {
  const { contact_email: email } = await getSettings();
  return (
    <>
      <PageHero title="Cookie Policy" text="Last updated: 6 November 2026" />
      <Prose>
        <p>This Cookie Policy explains how Ebenoba uses cookies and similar technologies on this website. It should be read with our <Link className="text-ember-600" href="/privacy">Privacy Policy</Link>.</p>

        <h2>1. What are cookies?</h2>
        <p>Cookies are small text files that a website places on your device. Similar technologies, such as your browser’s local storage, work in a comparable way. They help websites work, remember your choices and understand how visitors use them.</p>

        <h2>2. What we use</h2>
        <p><strong>Strictly necessary</strong></p>
        <ul>
          <li>The website does not need cookies to work. The only thing we store is your cookie choice (“accept” or “decline”), kept in your browser’s local storage under the name <code>ebenoba-consent</code>, so we do not ask you again on every visit.</li>
        </ul>
        <p><strong>Analytics (only with your consent)</strong></p>
        <ul>
          <li><strong>Google Analytics</strong> helps us see which pages are visited, how people find the website and how it performs. It sets cookies such as <code>_ga</code> and <code>_ga_*</code>, which last up to 2 years, and collects information such as your approximate location, device and browser. These cookies are set only if you click “Accept”. Google may process this data outside your country.</li>
        </ul>
        <p>We do not use advertising or tracking cookies, and we do not sell the data collected through cookies.</p>

        <h2>3. Your choices</h2>
        <ul>
          <li><strong>Our banner:</strong> when analytics are switched on, you can accept or decline them when you first visit. Declining has no effect on how the website works.</li>
          <li><strong>Change your mind:</strong> use the button below at any time to see the choice again.</li>
          <li><strong>Browser settings:</strong> you can block or delete cookies in your browser settings. Doing so may mean you are asked for your choice again.</li>
          <li><strong>Google:</strong> you can also install Google’s Analytics opt-out browser add-on.</li>
        </ul>
        <div className="not-prose pt-2"><CookieSettings /></div>

        <h2>4. Third-party links</h2>
        <p>Links to social media (such as TikTok and X) and to the Ebenoba application take you to other services that set their own cookies. We do not control them, so please read their policies.</p>

        <h2>5. Changes</h2>
        <p>We may update this policy, for example if we add new tools. The date above shows when it last changed.</p>

        <h2>6. Contact</h2>
        <p>Questions about cookies: <a className="text-ember-600" href={`mailto:${email}`}>{email}</a>.</p>
      </Prose>
    </>
  );
}
