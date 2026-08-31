# Niguss Solomon Gebru · Portfolio

My personal portfolio site: a single page built with Next.js that shows who I am,
where I have worked, what I have built, and how to reach me.

Live at [nigussgebru.com](https://nigussgebru.com)

## Run it on your machine

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000 and you are done.

## Change the content

All the text on the site lives in one file: [`src/lib/data.ts`](src/lib/data.ts).
Edit it and the page updates. Nothing else needs to be touched.

| What you want to change | Where |
| --- | --- |
| Name, roles, email, social links | `person` |
| The stats under the hero | `heroStats` |
| The About paragraph | `about` |
| Jobs and internships | `experience` |
| Project cards | `projects` |
| Skill groups | `skillCategories` |
| Contact options | `contactChannels` |

Two other things you may want:

- **Colors:** the CSS variables at the top of [`src/app/globals.css`](src/app/globals.css)
- **Résumé:** put a file named `resume.pdf` inside `public/` so the download button works

## How the site is put together

```
src/
├─ app/
│  ├─ page.tsx      the home page, stacks the sections in order
│  ├─ layout.tsx    fonts, page title, SEO tags
│  ├─ globals.css   colors and shared styles
│  └─ api/contact/  where the contact form posts
├─ components/
│  ├─ sections/     hero, about, experience, projects, skills, contact
│  ├─ ui/           small reusable pieces: button, card, badge
│  ├─ navbar.tsx    top bar with dark mode toggle
│  └─ footer.tsx
└─ lib/
   └─ data.ts       all the content
```

The page is six sections stacked top to bottom. Each one is its own file in
`components/sections/`, so if you want to change the projects area you only open
`projects.tsx`.

## Built with

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion for the animations

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Check for code problems |
| `npm run typecheck` | Check the TypeScript types |

## Contact form

The form sends to `/api/contact`, which right now checks the message is valid and
logs it on the server. To get the messages in your inbox, add an email service
such as [Resend](https://resend.com) at the `TODO` in
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).

## Deploying

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new), and set
one environment variable:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Vercel handles the rest. Any Node host also works with `npm run build` then `npm run start`.

## License

The code is free to reuse as a template. The written content, photos, and branding
belong to Niguss Solomon Gebru.
