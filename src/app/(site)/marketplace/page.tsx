import Link from "next/link";
import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { PageHero, Section } from "@/components/ui";
import { APP_URL, CATEGORIES } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/marketplace", { title: "Shop on Ebenoba", description: "Shop products from many businesses in one connected marketplace. Open the Ebenoba app to start." });
}

export default function Marketplace() {
  return (
    <>
      <PageHero title="Shop on Ebenoba" text="Browse products from many businesses in one place. Shopping, ordering, payments and delivery happen in the Ebenoba app.">
        <Link href={APP_URL} className="btn btn-primary">Open the app</Link>
      </PageHero>
      <Section id="categories" title="Categories">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{CATEGORIES.map((c) => <Link key={c} href={APP_URL} className="card font-semibold">{c}</Link>)}</div>
      </Section>
      <Section id="businesses" title="Businesses on Ebenoba" tint><p className="text-ink/60">Featured businesses will appear here.</p></Section>
      <Section id="promotions" title="Promotions"><p className="text-ink/60">Current promotions will appear here.</p></Section>
    </>
  );
}
