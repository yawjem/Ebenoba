import type { Metadata } from "next";
import { CONTACT, FAQS, NEWS, SITE_URL, SOCIALS } from "@/lib/site";

/* Static content for the public site. To change text, edit the values below or in site.ts.
   The getters are async so a CMS (e.g. Supabase) can be plugged in later without touching the pages. */

export type Banner = { id: string; placement: "hero" | "promo"; title: string; text: string; cta_label: string; cta_href: string; image_url: string };
export type Article = { slug: string; title: string; date: string; author: string; excerpt: string; body: string[]; image: string };
export type Testimonial = { id: string; name: string; role: string; quote: string };
export type Faq = { q: string; a: string };

export const SETTING_DEFAULTS: Record<string, string> = {
  contact_email: CONTACT.email,
  contact_phone: CONTACT.phone,
  contact_whatsapp: CONTACT.whatsapp,
  contact_address: CONTACT.address,
  contact_hours: CONTACT.hours,
  about_story: `Every great business begins with an idea. Ebenoba began with a vision of making commerce simpler, more connected and more accessible.

We recognised that businesses need more than just products to sell. They need visibility, opportunities to reach new customers and tools that help them compete in an increasingly digital world. At the same time, customers deserve a simpler way to discover businesses, explore products and find what they need.

Yet, the gap between these two sides of commerce can often make the experience more complicated than it needs to be.

We believe technology can help change that.

That belief became the foundation of Ebenoba: a digital marketplace designed to bring businesses and customers closer together. A platform where businesses can showcase what they offer, reach beyond their immediate surroundings and connect with a wider audience, while customers can discover more choices in one convenient place.

But our ambition goes beyond creating another online shopping destination. We see an opportunity to build a connected commerce ecosystem that supports businesses of different sizes, encourages innovation and makes everyday commerce more accessible.

We know that building this vision takes time. Every feature, every improvement and every connection brings us closer to the future we imagine.

Ebenoba is more than a name or a marketplace. It represents our belief that commerce should create opportunities for everyone involved.

We're building a place where businesses can grow, customers can discover, and opportunities can connect.

Welcome to Ebenoba.`,
  about_who: `We believe commerce should be accessible, convenient and full of opportunities. Whether you're a customer looking for the products you need or a business seeking to expand its reach, Ebenoba aims to bring both sides closer together through a connected marketplace.

Our goal is to create an environment where independent retailers, wholesalers, established businesses and everyday shoppers can interact more easily. By bringing different businesses and product offerings together, we aim to make discovering, comparing and purchasing products a more convenient experience.`,
  about_mission: "To simplify commerce by connecting businesses and consumers through an accessible, convenient and interconnected digital marketplace.",
  about_vision: "To become a leading digital commerce ecosystem that empowers businesses, expands market opportunities and transforms how people discover and purchase products.",
  about_ambitions: "To grow Ebenoba into a trusted commerce ecosystem that opens new market opportunities for businesses and changes how people discover and buy products.",
};

export async function getSettings(): Promise<Record<string, string>> { return { ...SETTING_DEFAULTS }; }
export function socialsFrom(_s: Record<string, string>) { return SOCIALS; }
export async function getBanners(_p: "hero" | "promo"): Promise<Banner[]> { return []; }
export async function getTestimonials(): Promise<Testimonial[]> { return []; }
export async function getFaqs(): Promise<Faq[]> { return FAQS; }
export async function getNews(): Promise<Article[]> { return NEWS.map((n) => ({ ...n, image: "" })); }
export async function getArticle(slug: string): Promise<Article | null> {
  const n = NEWS.find((x) => x.slug === slug);
  return n ? { ...n, image: "" } : null;
}

export async function seoFor(path: string, { title, description }: { title: string; description: string }): Promise<Metadata> {
  return {
    title, description,
    alternates: { canonical: `${SITE_URL}${path === "/" ? "" : path}` },
    openGraph: { title, description, url: `${SITE_URL}${path}` },
  };
}
