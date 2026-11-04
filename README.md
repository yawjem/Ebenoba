# Ebenoba corporate website (public site)

Next.js 15 + Tailwind 4, ready for Vercel. Brand: white & ember crimson. Built by ASE studio.

## Run
    npm install
    cp .env.example .env.local
    npm run dev

## Deploy
Push to GitHub, import in Vercel, add the env vars from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the live domain.

## Where to edit things
- Contact details, nav, footer links, categories, FAQs, news: `src/lib/site.ts`
- About text: `src/lib/content.ts`
- Page content: `src/app/(site)/<page>/page.tsx`
- Colours: `src/app/globals.css`; logo: `public/logo.png`

## Forms
Contact, seller enquiry, partnership and newsletter forms post to `/api/forms`, with honeypot spam protection. Enquiries are emailed to the team through Brevo once `BREVO_API_KEY` is set (the sender address must be verified in Brevo). Newsletter signups are added to the Brevo list in `BREVO_LIST_ID`. Until the key is set, submissions are only logged.

## Later (not built here)
Supabase + admin dashboard (a full version exists in `ebenoba-web-with-admin.zip`), Turnstile, Sentry, live chat, Search Console verification.
