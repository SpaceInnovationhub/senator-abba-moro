import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const completed = project.status === "Completed";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 w-full overflow-hidden sm:h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow ${
            completed
              ? "bg-green-700"
              : "bg-amber-500"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
          {project.category}
        </span>

        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-950 sm:text-2xl">
          {project.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={17} />
          <span>{project.lga} LGA</span>
        </div>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.id}`}
          className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-green-700 transition hover:gap-3"
        >
          View Details
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}