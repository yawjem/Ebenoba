import Consent from "@/components/Consent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";


const GA = process.env.NEXT_PUBLIC_GA_ID;
const orgLd = { "@context": "https://schema.org", "@type": "Organization", name: "Ebenoba", url: SITE_URL, logo: `${SITE_URL}/logo.png` };

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Consent gaId={GA} />
    </>
  );
}
