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
  "Niguss Solomon Gebru — Software Engineer, AI Researcher, Full Stack Developer, Founder, and Cybersecurity enthusiast building intelligent, secure, human-centered software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name} — Software Engineer & AI Researcher`,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Niguss Solomon Gebru",
    "Software Engineer",
    "AI Researcher",
    "Full Stack Developer",
    "Founder",
    "Cybersecurity",
    "Machine Learning",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${person.name} — Software Engineer & AI Researcher`,
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
    title: `${person.name} — Software Engineer & AI Researcher`,
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
  themeColor: "#050914",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

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
    jobTitle: "Software Engineer & AI Researcher",
    sameAs: [person.socials.github, person.socials.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Cybersecurity",
    ],
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
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
