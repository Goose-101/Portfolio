import { SectionHeading } from "@/components/section-heading";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & milestones."
          description="A few of the honors that mark the journey — earned through building, leading, and researching."
          align="center"
        />

        <StaggerGroup className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <StaggerItem key={a.title} className="h-full">
              <div className="group relative flex h-full flex-col items-start gap-3 overflow-hidden rounded-2xl glass glass-hover p-6">
                {/* Corner glow */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-cyan/10 text-accent ring-1 ring-accent/25">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {a.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
