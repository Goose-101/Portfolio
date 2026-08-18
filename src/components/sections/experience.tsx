"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";
import { duration, ease } from "@/lib/motion";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of building & leading."
          description="From founding a tech community to conducting research and shipping products — here's the path so far."
        />

        <div className="relative mt-16">
          {/* Vertical spine */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10 md:space-y-4">
            {experience.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li key={item.role} className="relative">
                  <div
                    className={[
                      "md:grid md:grid-cols-2 md:gap-12",
                      left ? "" : "md:[&>*:first-child]:col-start-2",
                    ].join(" ")}
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: duration.base, ease }}
                      className={[
                        "relative ml-12 rounded-2xl glass glass-hover p-6 md:ml-0",
                        left ? "md:mr-2 md:text-right" : "md:ml-2",
                      ].join(" ")}
                    >
                      {/* Node */}
                      <span className="absolute -left-[42px] top-6 grid h-6 w-6 place-items-center rounded-full bg-background ring-2 ring-accent/50 md:hidden">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                      </span>

                      <div
                        className={[
                          "flex items-center gap-2",
                          left ? "md:justify-end" : "",
                        ].join(" ")}
                      >
                        <span className="text-[13px] font-medium uppercase tracking-wider text-accent">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-[1.375rem] font-semibold">
                        {item.role}
                      </h3>
                      <p className="text-[15px] font-medium text-muted-foreground">
                        {item.org}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {item.summary}
                      </p>

                      <ul
                        className={[
                          "mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground",
                          left ? "md:ml-auto" : "",
                        ].join(" ")}
                      >
                        {item.points.map((pt) => (
                          <li
                            key={pt}
                            className={[
                              "flex gap-2",
                              left ? "md:flex-row-reverse md:text-right" : "",
                            ].join(" ")}
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={[
                          "mt-4 flex flex-wrap gap-2",
                          left ? "md:justify-end" : "",
                        ].join(" ")}
                      >
                        {item.tags.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </motion.article>
                  </div>

                  {/* Center node (desktop) */}
                  <span className="absolute left-1/2 top-6 hidden h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-background ring-2 ring-accent/50 md:grid">
                    <Briefcase className="h-3.5 w-3.5 text-accent" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
