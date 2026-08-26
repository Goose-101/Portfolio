"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStats, person } from "@/lib/data";
import { duration, ease } from "@/lib/motion";

/** Cycles through the roles with a soft crossfade. */
function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % person.roles.length),
      2600
    );
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.65, ease }}
        className="text-accent-gradient font-semibold"
      >
        {person.roles[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container-px grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-tint/[0.04] px-4 py-1.5 text-[13px] font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.base, ease, delay: 0.08 }}
            className="font-display text-[clamp(2.85rem,7.4vw,5.4rem)] font-bold leading-[0.98] tracking-tight"
          >
            {person.name.split(" ")[0]}
            <br />
            <span className="text-gradient">
              {person.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.base, ease, delay: 0.18 }}
            className="mt-5 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            <RoleRotator />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.base, ease, delay: 0.28 }}
            className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground sm:text-lg"
          >
            {person.tagline} My interests span full-stack development,
            artificial intelligence, research, cybersecurity, and building
            impactful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.base, ease, delay: 0.38 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" onClick={() => scrollTo("projects")}>
              View Projects
              <ArrowUpRight />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo("contact")}
            >
              Contact
              <Mail />
            </Button>
          </motion.div>

        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: duration.slow, ease, delay: 0.22 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <Portrait />
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease, delay: 0.55 }}
        className="container-px absolute inset-x-0 bottom-6 hidden md:block"
      >
        <div className="glass flex items-stretch justify-between gap-2 rounded-2xl px-2 py-2">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="flex-1 rounded-xl px-4 py-3 text-center transition-colors hover:bg-tint/[0.04]"
            >
              <div className="font-display text-[1.6rem] font-bold text-foreground">
                {s.value}
              </div>
              <div className="mt-0.5 text-[13px] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Generated portrait frame. Swap the inner block for a real photo
 * (e.g. next/image) whenever one is available — the frame stays.
 */
function Portrait() {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="relative">
      {/* Glow ring */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/30 via-cyan/20 to-transparent blur-2xl" />

      <div className="relative aspect-square overflow-hidden rounded-full glass p-[1.5px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-[hsl(222,44%,10%)] to-[hsl(224,47%,5%)]">
          {person.photo ? (
            /* Portrait photo */
            <Image
              src={person.photo}
              alt={`Portrait of ${person.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 28rem, 32rem"
              className="object-cover object-top"
            />
          ) : (
            <>
              {/* Decorative gradient wash */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.25),transparent_55%),radial-gradient(circle_at_80%_80%,hsl(var(--cyan)/0.2),transparent_55%)]" />
              <div className="absolute inset-0 grid-lines opacity-40" />

              {/* Initials monogram */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-[7rem] font-bold text-white/[0.06] select-none">
                  {initials}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
