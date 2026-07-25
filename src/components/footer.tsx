"use client";

import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { navLinks, person } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { icon: Github, href: person.socials.github, label: "GitHub" },
    { icon: Linkedin, href: person.socials.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${person.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border/60 pt-16">
      <div className="container-px pb-10">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Brand */}
          <button
            onClick={toTop}
            className="flex items-center gap-2.5 font-display text-lg font-semibold"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30">
              <Terminal className="h-4 w-4" />
            </span>
            {person.wordmark}
          </button>

          <p className="max-w-md text-sm text-muted-foreground">
            {person.tagline}
          </p>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full glass glass-hover text-muted-foreground hover:text-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {person.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & built with
            <span className="text-accent">Next.js</span>
            &
            <span className="text-cyan">Framer Motion</span>.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={toTop}
        aria-label="Back to top"
        className="group absolute -top-6 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-glow transition-transform hover:-translate-y-1 hover:-translate-x-1/2"
      >
        <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </footer>
  );
}
