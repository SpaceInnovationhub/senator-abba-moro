import Link from "next/link";

import {
  ArrowRight,
  Building2,
  MapPin,
} from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

interface ProjectLgaContextProps {
  project: IntelligenceProject;
}

export default function ProjectLgaContext({
  project,
}: ProjectLgaContextProps) {
  const lgaSlug = project.lga.toLowerCase();

  return (
    <section className="mt-12">
      <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-800">
              <Building2 size={24} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                LGA Context
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
                {project.lga} Local Government Area
              </h2>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <MapPin
                  size={16}
                  className="shrink-0 text-green-700"
                />

                <span>
                  {project.community}, {project.lga} LGA
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                View other constituency projects, development sectors and
                public information connected to {project.lga} Local Government
                Area.
              </p>
            </div>
          </div>

          <Link
            href={`/constituency/${lgaSlug}`}
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-green-800 px-5 text-sm font-bold !text-white transition hover:bg-green-700 hover:!text-white"
          >
            View {project.lga} Intelligence
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}