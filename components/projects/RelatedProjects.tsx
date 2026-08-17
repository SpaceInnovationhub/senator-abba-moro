import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { explorerProjects } from "@/data/projectExplorer";
import type { IntelligenceProject, ProjectStatus } from "@/types/projects";

interface RelatedProjectsProps {
  project: IntelligenceProject;
}

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-green-700 text-white",
  Ongoing: "bg-amber-500 text-green-950",
  "2026 Budget": "bg-blue-700 text-white",
  Planned: "bg-slate-700 text-white",
  Recorded: "bg-slate-600 text-white",
};

export default function RelatedProjects({
  project,
}: RelatedProjectsProps) {
  const relatedProjects = explorerProjects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        (item.category === project.category ||
          item.lga === project.lga)
    )
    .slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
              Related Development
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Related constituency projects
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore other projects within the same category or Local
              Government Area.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-bold text-green-700 transition hover:gap-3"
          >
            View all projects
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProjects.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${
                    statusStyles[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                  {item.category}
                </p>

                <h3 className="mt-2 text-xl font-extrabold leading-7 text-slate-950">
                  {item.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin
                      size={14}
                      className="text-green-700"
                    />
                    {item.lga} LGA
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays
                      size={14}
                      className="text-green-700"
                    />
                    {item.year}
                  </span>
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={`/projects/${item.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-green-700 transition group-hover:gap-3"
                >
                  View project intelligence
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}