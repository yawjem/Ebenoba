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
  about_story: "Ebenoba was created to make it easier for people to find what they need and for businesses to be found. Our story section will be completed with Ebenoba's own account of how the company began.",
  about_who: "Ebenoba is a marketplace that brings buyers and sellers together, with convenient shopping, order management and delivery in one connected experience.",
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
