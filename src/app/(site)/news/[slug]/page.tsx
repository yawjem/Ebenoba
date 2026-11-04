import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, getNews } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

type P = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return (await getNews()).map((n) => ({ slug: n.slug })); }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const n = await getArticle(slug);
  if (!n) return {};
  return {
    title: n.title, description: n.excerpt,
    alternates: { canonical: `${SITE_URL}/news/${n.slug}` },
    openGraph: { type: "article", title: n.title, description: n.excerpt, publishedTime: n.date, ...(n.image ? { images: [n.image] } : {}) },
  };
}

export default async function Article({ params }: P) {
  const { slug } = await params;
  const n = await getArticle(slug);
  if (!n) notFound();
  const url = encodeURIComponent(`${SITE_URL}/news/${n.slug}`);
  const title = encodeURIComponent(n.title);
  const ld = { "@context": "https://schema.org", "@type": "NewsArticle", headline: n.title, datePublished: n.date, ...(n.image ? { image: [n.image] } : {}), author: { "@type": "Organization", name: n.author } };
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      {n.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={n.image} alt="" className="mb-6 aspect-video w-full rounded-2xl object-cover" />
      ) : (
        <div className="mb-6 aspect-video rounded-2xl bg-ember-100" aria-hidden="true" />
      )}
      <h1 className="text-4xl font-extrabold tracking-tight">{n.title}</h1>
      <p className="mt-2 text-sm text-ink/60"><time dateTime={n.date}>{n.date}</time> · {n.author}</p>
      <div className="mt-8 space-y-4 text-ink/80">{n.body.map((p, i) => <p key={i}>{p}</p>)}</div>
      <div className="mt-10 flex gap-4 text-sm font-semibold text-ember-600">
        <span className="text-ink/60">Share:</span>
        <a rel="noopener noreferrer" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>Facebook</a>
        <a rel="noopener noreferrer" target="_blank" href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}>X</a>
        <a rel="noopener noreferrer" target="_blank" href={`https://wa.me/?text=${title}%20${url}`}>WhatsApp</a>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
    </article>
  );
}
