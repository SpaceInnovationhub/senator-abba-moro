import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  MapPin,
} from "lucide-react";

import type { IntelligenceProject, ProjectStatus } from "@/types/projects";

import Container from "../ui/Container";

import ProjectBreadcrumbs from "./ProjectBreadcrumbs";

interface ProjectDetailHeroProps {
  project: IntelligenceProject;
}

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-green-700 text-white",
  Ongoing: "bg-amber-500 text-green-950",
  "2026 Budget": "bg-blue-700 text-white",
  Planned: "bg-slate-700 text-white",
  Recorded: "bg-slate-600 text-white",
};

export default function ProjectDetailHero({
  project,
}: ProjectDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-green-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/95 to-green-950/60" />
      </div>

      <Container>
        <div className="relative z-10 py-16 sm:py-20 lg:py-24">
          <ProjectBreadcrumbs project={project} />

          <div className="mt-8 max-w-5xl">
            <div className="flex flex-wrap gap-3">
              <span
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white">
                {project.category}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-green-50/75 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-green-50/75">
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-amber-300"
                />
                {project.lga} LGA
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-amber-300"
                />
                {project.community}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays
                  size={18}
                  className="text-amber-300"
                />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}