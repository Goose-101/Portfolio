"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & experiments."
          description="A mix of shipped products, research prototypes, and hardware builds — each solving a real problem end to end."
        />

        <StaggerGroup className="mt-16 grid grid-flow-row-dense gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem
              key={project.title}
              className={cn(project.featured && "sm:col-span-2 lg:col-span-2")}
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  // The card's primary destination when clicked (skip "#" placeholders).
  const primary =
    project.links.demo || project.links.caseStudy || project.links.github;
  const primaryHref = primary && primary !== "#" ? primary : undefined;
  const external = primaryHref?.startsWith("http");

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl glass glass-hover"
    >
      {/* Cover art */}
      <div
        className={cn(
          "relative aspect-[16/9] overflow-hidden bg-gradient-to-br",
          project.gradient
        )}
      >
        {project.images?.length ? (
          // Multiple covers: side by side, each cropped to fill its half so the
          // window has no empty gradient showing through. A hairline divider
          // keeps the two photos readable as separate shots.
          <div className="absolute inset-0 flex gap-px bg-white/10">
            {project.images.map((src, i) => (
              <div key={src} className="relative min-w-0 flex-1 overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} — view ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-lines opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <Icon className="h-14 w-14 text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
            </div>
          </>
        )}
        <span className="absolute left-4 top-4 z-20 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>
        {/* Full-cover click target → primary link */}
        {primaryHref && (
          <a
            href={primaryHref}
            target={external ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute inset-0 z-10"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">
          {primaryHref ? (
            <a
              href={primaryHref}
              target={external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              {project.title}
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          ) : (
            <span className="flex items-center gap-1.5">
              {project.title}
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </span>
          )}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
          {project.links.github && (
            <ProjectLink href={project.links.github} icon={Github}>
              Code
            </ProjectLink>
          )}
          {project.links.demo && (
            <ProjectLink href={project.links.demo} icon={ExternalLink}>
              Live Demo
            </ProjectLink>
          )}
          {project.links.caseStudy && (
            <ProjectLink href={project.links.caseStudy} icon={FileText}>
              Case Study
            </ProjectLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: typeof Github;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </a>
  );
}
