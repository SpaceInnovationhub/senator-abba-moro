import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

import Container from "../ui/Container";

interface LgaProjectsProps {
  lgaName: string;
  projects: IntelligenceProject[];
}

type ProjectStatus = IntelligenceProject["status"];

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-green-700 text-white",
  Ongoing: "bg-amber-500 text-green-950",
  "2026 Budget": "bg-blue-700 text-white",
  Planned: "bg-slate-700 text-white",
  Recorded: "bg-slate-600 text-white",
};

export default function LgaProjects({
  lgaName,
  projects,
}: LgaProjectsProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
              Constituency Projects
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Projects in {lgaName}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore registered constituency projects and development
              interventions within {lgaName} Local Government Area.
            </p>
          </div>

          <Link
            href={`/projects?lga=${lgaName}`}
            className="inline-flex items-center gap-2 font-bold text-green-700 transition hover:gap-3"
          >
            View all projects
            <ArrowRight size={17} />
          </Link>
        </div>

        {projects.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <article
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </span>

                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-green-800 shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-extrabold leading-7 text-slate-950">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin
                        size={14}
                        className="text-green-700"
                      />
                      {project.community}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <CalendarDays
                        size={14}
                        className="text-green-700"
                      />
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">
                        Progress
                      </span>

                      <span className="font-extrabold text-green-700">
                        {typeof project.progress === "number"
                          ? `${project.progress}%`
                          : "Not published"}
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-green-700"
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-green-700 transition group-hover:gap-3"
                  >
                    View project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <h3 className="text-xl font-extrabold text-slate-900">
              No registered projects yet
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Projects will appear here as verified records are added.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}