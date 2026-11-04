import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { getNews, seoFor } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/news", { title: "News & Updates", description: "Platform features, seller announcements, promotions and company news from Ebenoba." });
}

export default async function News() {
  const news = await getNews();
  return (
    <>
      <PageHero title="News & updates" text="Announcements, features and promotions from Ebenoba." />
      <Section>
        {news.length === 0 && <p className="rounded-2xl border border-dashed border-ember-200 p-8 text-center text-ink/60">No articles yet. Check back soon.</p>}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Link key={n.slug} href={`/news/${n.slug}`} className="card block">
              {n.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={n.image} alt="" loading="lazy" className="mb-4 aspect-video w-full rounded-xl object-cover" />
              ) : (
                <div className="mb-4 aspect-video rounded-xl bg-ember-100" aria-hidden="true" />
              )}
              <time className="text-xs text-ink/60" dateTime={n.date}>{n.date}</time>
              <h2 className="mt-1 text-lg font-bold">{n.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
