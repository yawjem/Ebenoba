import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Ebenoba | Everything You Need. All in One Marketplace.", template: "%s | Ebenoba" },
  description: "Discover products, explore businesses and enjoy a convenient shopping experience. Ebenoba brings buyers and sellers together in one connected marketplace.",
  openGraph: { type: "website", siteName: "Ebenoba", url: SITE_URL, images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
