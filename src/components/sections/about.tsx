import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { about, person } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="About"
          title="Turning curiosity into impact."
          align="center"
        />
      </div>

      <div className="container-px mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {/* Fact list */}
          <ul className="space-y-3">
            {about.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.05 * i} as="li">
                <div className="flex items-center gap-3 rounded-2xl glass glass-hover px-4 py-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25">
                    <fact.icon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-medium leading-snug text-foreground/90">
                    {fact.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Story */}
        <div className="flex flex-col gap-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-base leading-relaxed text-muted-foreground [&:first-child]:text-[17px] [&:first-child]:text-foreground/90">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <figure className="mt-4 rounded-2xl border-l-2 border-accent/60 bg-tint/[0.03] px-6 py-5">
              <blockquote className="font-display text-xl font-medium leading-snug text-foreground/90">
                &ldquo;Nothing is out of reach for a man who never stops
                reaching.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[15px] text-muted-foreground">
                — {person.firstName}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
