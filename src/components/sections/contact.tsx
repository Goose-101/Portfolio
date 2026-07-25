"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, Send, Check, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { contactChannels, person } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(var(--accent)/0.08),transparent)]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great."
          description="Have a project, a research idea, or an opportunity in mind? My inbox is always open."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Channels */}
          <div className="flex flex-col gap-4">
            {contactChannels.map((c, i) => (
              <Reveal key={c.label} delay={0.05 * i}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl glass glass-hover p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25 transition-transform group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate font-medium text-foreground">
                      {c.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <Button asChild variant="outline" size="lg" className="mt-1 w-full">
                <a href={person.resumeUrl} download>
                  <Download />
                  Download Résumé
                </a>
              </Button>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Subject" htmlFor="subject" className="mt-5">
                <input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className={inputCls}
                />
              </Field>

              <Field label="Message" htmlFor="message" className="mt-5">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about it…"
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send />
                      Send message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-sm text-emerald-400"
                  >
                    <Check className="h-4 w-4" />
                    Thanks — I&apos;ll be in touch.
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-sm text-red-400"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </motion.span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.04]";

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
