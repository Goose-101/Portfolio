import { SectionHeading } from "@/components/section-heading";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with."
          description="A broad, T-shaped toolkit spanning product engineering, AI, cloud, and security."
          align="center"
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl glass glass-hover p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25 transition-transform duration-300 group-hover:scale-110">
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[17px] font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-border/60 bg-tint/[0.03] px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
