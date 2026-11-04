export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ebenoba.com";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "/marketplace";
export const SELLER_URL = process.env.NEXT_PUBLIC_SELLER_SIGNUP_URL || "/sell#enquiry";

// Official contact details supplied by Ebenoba.
export const CONTACT = {
  name: "Ebenoba",
  email: process.env.CONTACT_TO_EMAIL || "ebenoba56@gmail.com",
  phone: "+233 24 203 0200",
  whatsapp: "https://wa.me/233242030200",
  address: "Plt 70 Blk G, Mpatasie, Kumasi (opposite the SDA church)",
  hours: "Online marketplace open 24/7. Customer support: Mon – Fri, 8:00 – 17:00 (GMT)",
};

export const SOCIALS = [
  { name: "TikTok", href: "https://www.tiktok.com/@ebenezerantwi123" },
  { name: "X", href: "https://x.com/antwi_eben" },
];

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/sell", label: "Sell" },
  { href: "/partnerships", label: "Partners" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER = [
  { title: "Ebenoba", links: [["About Us", "/about"], ["Our Services", "/services"], ["News", "/news"], ["Careers", "/careers"]] },
  { title: "Explore", links: [["Marketplace", "/marketplace"], ["Categories", "/marketplace#categories"], ["Featured Businesses", "/marketplace#businesses"], ["Promotions", "/marketplace#promotions"]] },
  { title: "Businesses", links: [["Become a Seller", "/sell"], ["Seller Benefits", "/sell#benefits"], ["Partnerships", "/partnerships"], ["Business Enquiries", "/partnerships#proposal"]] },
  { title: "Support", links: [["Contact Us", "/contact"], ["FAQs", "/faqs"], ["Help Centre", "/faqs"], ["Feedback", "/contact?type=Feedback"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"], ["Cookie Policy", "/cookies"], ["Accessibility", "/accessibility"]] },
] as const;

export const CATEGORIES = ["Fashion & Apparel", "Electronics", "Home & Living", "Groceries & Food", "Beauty & Health", "Phones & Gadgets", "Auto", "Baby & Kids", "Services"];

export const FAQS = [
  { q: "What is Ebenoba?", a: "Ebenoba is a connected digital marketplace where buyers discover products from many businesses in one place." },
  { q: "How do I place an order?", a: "Open the Ebenoba application, browse products or businesses, add items and check out. Delivery options are shown at checkout." },
  { q: "How do I become a seller?", a: "Visit the Become a Seller page, review the requirements and register, or send an enquiry if you'd like more information first." },
  { q: "How much does it cost to sell?", a: "Ebenoba charges a commission on each sale. It is dynamic and ranges from 9% to 20% depending on the product category. Contact us for the rate that applies to your products." },
  { q: "Can I track my order?", a: "Eligible orders can be tracked in the application, with delivery notifications along the way." },
  { q: "How do I contact support?", a: "Use the contact form, email us or message us on WhatsApp. Choose the enquiry category that best fits." },
];

export const NEWS = [
  { slug: "welcome-to-ebenoba", title: "Welcome to Ebenoba", date: "2026-11-01", author: "Ebenoba Editorial", excerpt: "We're building a connected marketplace for buyers and businesses. Here's what's coming.", body: ["Ebenoba brings buyers and sellers together in one connected marketplace.", "Follow this page for platform features, seller announcements and promotions. Articles will be published by the Ebenoba team."] },
];
