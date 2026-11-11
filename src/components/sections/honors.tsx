import { SectionHeading } from "@/components/section-heading";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal";
import { honors } from "@/lib/data";

export function Honors() {
  return (
    <section id="honors" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Recognition"
          title="Honors & involvement."
          align="center"
        />

        <StaggerGroup className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2">
          {honors.map((honor) => (
            <StaggerItem key={honor.title} className="h-full">
              <div className="group flex h-full items-center gap-4 rounded-2xl glass glass-hover p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25 transition-transform duration-300 group-hover:scale-110">
                  <honor.icon className="h-6 w-6" />
                </span>
                <div>
                  {honor.meta && (
                    <span className="text-[13px] font-medium uppercase tracking-wider text-accent">
                      {honor.meta}
                    </span>
                  )}
                  <h3 className="font-display text-[1.125rem] font-semibold leading-snug">
                    {honor.title}
                  </h3>
                  {honor.detail && (
                    <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                      {honor.detail}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
