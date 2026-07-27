import { FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal";
import { research } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeStyles: Record<string, string> = {
  Publication: "text-cyan ring-cyan/30 bg-cyan/10",
  Presentation: "text-accent ring-accent/30 bg-accent/10",
  Ongoing: "text-emerald-400 ring-emerald-400/30 bg-emerald-400/10",
};

export function Research() {
  return (
    <section id="research" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* Section tint */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--cyan)/0.06),transparent)]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Research"
          title="Exploring quantum, data & security."
          description="Beyond coursework, I dig into quantum computing, data management, and cybersecurity through research programs, projects, and certified study."
        />

        <StaggerGroup className="mt-16 space-y-4">
          {research.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group grid gap-4 rounded-2xl glass glass-hover p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "rounded-full px-3 py-0.5 text-xs font-semibold ring-1",
                        typeStyles[item.type]
                      )}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.venue} · {item.year}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
