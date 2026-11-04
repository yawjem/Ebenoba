import Link from "next/link";
import type { Metadata } from "next";
import { seoFor } from "@/lib/content";
import { Banner, Cards, Section } from "@/components/ui";
import { APP_URL, CATEGORIES, SELLER_URL } from "@/lib/site";
import { getBanners, getTestimonials } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/", { title: "Ebenoba | Everything You Need. All in One Marketplace.", description: "Discover products, explore businesses and enjoy a convenient shopping experience. Ebenoba brings buyers and sellers together in one connected marketplace." });
}

export default async function Home() {
  const [heroes, promos, testimonials] = await Promise.all([getBanners("hero"), getBanners("promo"), getTestimonials()]);
  const hero = heroes[0];
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-ember-50 via-white to-ember-100/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="fade-up">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              {hero ? hero.title : <>Everything You Need. <span className="text-ember-600">All in One Marketplace.</span></>}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">
              {hero ? hero.text : "Discover products, explore businesses and enjoy a convenient shopping experience. Ebenoba brings buyers and sellers together in one connected marketplace."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={hero?.cta_href || APP_URL} className="btn btn-primary">{hero?.cta_label || "Explore Ebenoba"}</Link>
              <Link href={SELLER_URL} className="btn btn-outline">Become a Seller</Link>
            </div>
          </div>
          {hero?.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.image_url} alt="" className="fade-up aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
          ) : (
          <div className="fade-up grid grid-cols-2 gap-4" aria-hidden="true">
            {["Shopping", "Businesses", "Deliveries", "Promotions"].map((t, i) => (
              <div key={t} className={`grid aspect-square place-items-center rounded-3xl text-lg font-bold ${i % 3 === 0 ? "bg-ember-600 text-white" : "bg-white text-ember-700 shadow-lg"} ${i % 2 ? "translate-y-6" : ""}`}>{t}</div>
            ))}
          </div>
          )}
        </div>
      </div>

      <Section title="How Ebenoba works" intro="Three simple steps from browsing to your door.">
        <Cards items={[
          { title: "1. Discover", text: "Explore products and businesses." },
          { title: "2. Shop", text: "Find what you need and place orders." },
          { title: "3. Receive", text: "Enjoy convenient delivery options." },
        ]} />
      </Section>

      <Section title="Why Ebenoba?" tint>
        <Cards items={[
          { title: "Multiple businesses, one marketplace" },
          { title: "Convenient shopping" },
          { title: "Diverse product selections" },
          { title: "Business growth opportunities" },
          { title: "Promotional opportunities for sellers" },
          { title: "Convenient order management" },
        ]} />
      </Section>

      <Section id="categories" title="Featured categories" intro="The kinds of products you can discover.">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <Link key={c} href="/marketplace" className="rounded-full border border-ember-200 bg-white px-5 py-2.5 font-medium text-ember-700 transition hover:bg-ember-600 hover:text-white">{c}</Link>
          ))}
        </div>
      </Section>

      <Section id="businesses" title="Featured businesses" intro="Selected businesses on Ebenoba will appear here." tint>
        <p className="rounded-2xl border border-dashed border-ember-200 p-8 text-center text-ink/60">Featured businesses will appear here soon.</p>
      </Section>

      <Section id="promotions" title="Promotions and announcements" intro="Current campaigns and seasonal offers.">
        {promos.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {promos.map((b) => (
              <div key={b.id} className="overflow-hidden rounded-3xl bg-gradient-to-br from-ember-700 to-ember-500 text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {b.image_url && <img src={b.image_url} alt="" className="aspect-video w-full object-cover" />}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{b.title}</h3>
                  {b.text && <p className="mt-2 text-white/90">{b.text}</p>}
                  {b.cta_label && b.cta_href && <Link href={b.cta_href} className="btn btn-light mt-4">{b.cta_label}</Link>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-ember-200 p-8 text-center text-ink/60">No active campaigns right now. <Link href="/news" className="font-semibold text-ember-600">Read the latest news</Link>.</p>
        )}
      </Section>

      <Banner title="Grow your business on Ebenoba" text="Open an online storefront, reach more customers and manage orders in one place." href={SELLER_URL} label="Join Ebenoba" />

      <Section title="What customers say" tint>
        {testimonials.length ? (
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.id} className="card">
                <blockquote className="text-ink/80">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">{t.name}{t.role && <span className="font-normal text-ink/60"> · {t.role}</span>}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-ember-200 bg-white p-8 text-center text-ink/60">Genuine customer testimonials will be published here once collected.</p>
        )}
      </Section>

      <Section title="Get started">
        <div className="flex flex-wrap gap-3">
          <Link href={APP_URL} className="btn btn-primary">Open the Ebenoba app</Link>
          <Link href="/faqs" className="btn btn-outline">Read the FAQs</Link>
        </div>
      </Section>
    </>
  );
}
