import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { person } from "@/lib/data";
import { SITE_URL } from "@/lib/utils";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Niguss Gebru — Software Engineer, Full-Stack Developer, founder of Fresh Land, and undergraduate researcher at Georgia State University building production platforms, applied research, and AI-powered tools.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name} — Software Engineer & Founder`,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Niguss Gebru",
    "Software Engineer",
    "Full Stack Developer",
    "Founder",
    "Fresh Land",
    "Undergraduate Researcher",
    "Georgia State University",
    "Honors Computer Science",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${person.name} — Software Engineer & Founder`,
    description,
    siteName: `${person.name} · Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: person.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Software Engineer & Founder`,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  // Matches the dark default. Not media-based: the page no longer follows the
  // OS setting, so keying browser chrome off it would mismatch the page.
  // ThemeToggle rewrites this at runtime when the visitor switches.
  themeColor: "#050914",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * Applies the saved theme before first paint.
 *
 * Dark is the deliberate default: a first-time visitor always lands on dark
 * regardless of their OS setting, and only ever sees light after choosing it
 * with the toggle. That choice is then remembered.
 *
 * This has to be a blocking inline script: if the class were added by React
 * after hydration, the page would paint in the wrong theme first and flash.
 */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"){t="dark"}document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t}catch(e){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark"}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: SITE_URL,
    email: `mailto:${person.email}`,
    jobTitle: "Software Engineer, Founder & Undergraduate Researcher",
    alumniOf: "Georgia State University Perimeter College",
    sameAs: [person.socials.github, person.socials.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Artificial Intelligence",
      "Adaptive Learning Systems",
      "Web Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        {children}
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
