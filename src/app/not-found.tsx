import Link from "next/link";
export default function NotFound() {
  return <div className="mx-auto max-w-xl px-4 py-24 text-center"><h1 className="text-4xl font-extrabold">Page not found</h1><p className="mt-3 text-ink/70">That page doesn't exist.</p><Link href="/" className="btn btn-primary mt-6">Back home</Link></div>;
}
