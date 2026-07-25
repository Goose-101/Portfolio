# Niguss Solomon Gebru — Portfolio

A premium, dark-themed personal portfolio for **Niguss Solomon Gebru** —
Software Engineer · AI Researcher · Full Stack Developer · Founder · Cybersecurity Enthusiast · Student Researcher.

Built with a focus on polished motion, strong typography, glassmorphism,
accessibility, and performance.

---

## ✨ Highlights

- **Immersive hero** with rotating roles, animated gradient orbs, masked grid, and a generated portrait frame.
- **Sticky blur navbar** with scroll-spy (active section tracking) and an animated mobile menu.
- **Scroll-reveal animations** throughout via Framer Motion (staggered cards, fade-up, parallax orbs).
- **Sections:** Hero, About, Experience (alternating timeline), Projects (responsive grid), Research, Skills, Achievements, Contact.
- **Working contact form** with client validation + an API route ready for an email provider.
- **SEO-complete:** metadata, Open Graph, Twitter cards, JSON-LD structured data, dynamic OG image, sitemap, robots, web manifest.
- **Accessible:** semantic HTML, keyboard navigation, focus-visible rings, skip link, ARIA labels, and full `prefers-reduced-motion` support.
- **Single source of truth:** all content lives in [`src/lib/data.ts`](src/lib/data.ts).

## 🧱 Tech Stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 15 (App Router, Server Components) |
| UI         | React 19 + TypeScript (strict)          |
| Styling    | Tailwind CSS 3 + CSS design tokens      |
| Motion     | Framer Motion 11                        |
| Icons      | Lucide React                            |
| Utilities  | clsx · tailwind-merge · class-variance-authority |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) configure the public site URL for SEO
cp .env.example .env.local
#   → set NEXT_PUBLIC_SITE_URL to your production domain

# 3. Run the dev server
npm run dev
#   → http://localhost:3000

# 4. Production build
npm run build && npm run start
```

### Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server               |
| `npm run build`     | Production build                   |
| `npm run start`     | Serve the production build         |
| `npm run lint`      | Lint with ESLint                   |
| `npm run typecheck` | Type-check with `tsc --noEmit`     |

## 🗂️ Project Structure

```
src/
├─ app/
│  ├─ layout.tsx            # Fonts, metadata, JSON-LD, skip link
│  ├─ page.tsx              # Composes all sections
│  ├─ globals.css           # Design tokens + utilities
│  ├─ opengraph-image.tsx   # Dynamic OG/Twitter image
│  ├─ sitemap.ts / robots.ts / manifest.ts
│  └─ api/contact/route.ts  # Contact form endpoint
├─ components/
│  ├─ navbar.tsx            # Sticky nav + scroll-spy + mobile menu
│  ├─ footer.tsx            # Socials + back-to-top
│  ├─ scroll-progress.tsx   # Top reading-progress bar
│  ├─ animated-background.tsx
│  ├─ section-heading.tsx
│  ├─ motion/reveal.tsx     # Reveal + stagger primitives
│  ├─ ui/                   # Button, Card, Badge, Slot
│  └─ sections/             # hero, about, experience, projects,
│                           #   research, skills, achievements, contact
└─ lib/
   ├─ data.ts               # ← ALL content lives here
   └─ utils.ts              # cn() + SITE_URL
```

## ✏️ Customizing Content

Nearly everything is data-driven. Open [`src/lib/data.ts`](src/lib/data.ts) to edit:

- `person` — name, roles, tagline, email, social links, résumé path
- `experience`, `projects`, `research`, `skillCategories`, `achievements`
- `navLinks`, `heroStats`, `about`, `contactChannels`

**Colors / theme:** tweak the CSS variables in
[`src/app/globals.css`](src/app/globals.css) (`--accent`, `--cyan`, `--background`, `--radius`).

**Résumé:** drop a `resume.pdf` into `public/` so the *Download Résumé* button works.

**Real photo:** replace the generated `Portrait` block in
[`src/components/sections/hero.tsx`](src/components/sections/hero.tsx) with a
`next/image` element.

## 📬 Enabling the Contact Form

The form posts to `POST /api/contact`, which currently validates the payload
and logs it server-side. To actually deliver messages, wire an email provider
in [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) (e.g.
[Resend](https://resend.com), SendGrid, or Nodemailer) at the marked `TODO`
and add the provider's API key to your environment.

## ☁️ Deployment (Vercel)

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Set the env var `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy — Vercel auto-detects Next.js. No extra config needed.

Also deployable to any Node host: `npm run build` then `npm run start`.

## ♿ Accessibility & Performance

- Semantic landmarks, `aria-current` on the active nav item, labelled controls.
- Visible focus rings and a keyboard skip-to-content link.
- `prefers-reduced-motion` disables animations globally.
- Fonts optimized via `next/font`; code-split, lazy client components; static prerendering where possible.

## 📄 License

Personal project for Niguss Solomon Gebru. Content and branding © Niguss Solomon Gebru.
Code is free to reuse as a template.
