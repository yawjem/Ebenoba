import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { Cards, PageHero, Section } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/services", { title: "Our Services", description: "What Ebenoba offers customers, sellers, businesses and delivery partners." });
}

const t = (a: string[]) => a.map((title) => ({ title }));

export default function Services() {
  return (
    <>
      <PageHero title="Our services" text="Whether you're shopping for something you need, looking to grow your business or searching for new commercial opportunities, Ebenoba is working to bring the different sides of commerce closer together." />
      <Section title="For customers"><Cards items={t(["Discover products from multiple businesses", "Explore different product categories", "Compare available offers", "Shop conveniently", "Access promotional deals", "Track eligible orders"])} /></Section>
      <Section title="For sellers" tone="cream"><Cards items={t(["Establish an online storefront", "Reach more customers", "Showcase products", "Manage orders", "Monitor business performance", "Participate in promotional campaigns"])} /></Section>
      <Section title="For businesses" tone="gold"><Cards items={t(["Digital business exposure", "Marketing opportunities", "Customer acquisition", "Sales analytics", "Business growth opportunities"])} /></Section>
      <Section title="Delivery and logistics" tone="leaf"><Cards cols={4} items={t(["Convenient delivery arrangements", "Order tracking", "Delivery coordination", "Delivery notifications"])} /></Section>
    </>
  );
}
