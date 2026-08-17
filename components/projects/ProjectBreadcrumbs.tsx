import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

interface ProjectBreadcrumbsProps {
  project: IntelligenceProject;
}

export default function ProjectBreadcrumbs({
  project,
}: ProjectBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-green-50/70"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 transition hover:text-white"
      >
        <Home size={15} />
        Home
      </Link>

      <ChevronRight size={15} />

      <Link
        href="/projects"
        className="transition hover:text-white"
      >
        Projects
      </Link>

      <ChevronRight size={15} />

      <span className="max-w-[320px] truncate font-semibold text-white">
        {project.title}
      </span>
    </nav>
  );
}