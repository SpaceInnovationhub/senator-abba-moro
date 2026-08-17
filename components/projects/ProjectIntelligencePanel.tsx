import {
  Banknote,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Target,
  Users,
} from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

interface ProjectIntelligencePanelProps {
  project: IntelligenceProject;
}

export default function ProjectIntelligencePanel({
  project,
}: ProjectIntelligencePanelProps) {
  const items = [
    {
      label: "Project Status",
      value: project.status,
      icon: CheckCircle2,
    },
    {
      label: "Local Government",
      value: `${project.lga} LGA`,
      icon: Building2,
    },
    {
      label: "Community",
      value: project.community,
      icon: MapPin,
    },
    {
      label: "Project Year",
      value: String(project.year),
      icon: CalendarDays,
    },
    {
      label: "Category",
      value: project.category,
      icon: Target,
    },
    {
      label: "Beneficiaries",
      value: project.beneficiaries ?? "Not specified",
      icon: Users,
    },
    {
      label: "Funding Source",
      value: project.fundingSource ?? "Not specified",
      icon: Banknote,
    },
    {
      label: "Coverage",
      value:
        project.lga === "Benue South"
          ? "Constituency-wide"
          : `${project.lga} LGA`,
      icon: Building2,
    },
  ];

  const progress = typeof project.progress === "number" ? project.progress : 0;

  return (
    <section className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
          Project Intelligence
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
          Project Information
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Key implementation and constituency information for this
          development project.
        </p>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Icon size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">
                  {item.label}
                </p>

                <p className="mt-1 break-words text-sm font-bold text-slate-900">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-7 rounded-2xl bg-green-950 p-5 text-white">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-green-100/70">
              Implementation Progress
            </p>

            <p className="mt-2 text-3xl font-extrabold">
              {typeof project.progress === "number"
                ? `${project.progress}%`
                : "N/A"}
            </p>
          </div>

          <Target
            size={28}
            className="text-amber-300"
          />
        </div>

        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-amber-400 transition-all"
            style={{
              width: `${Math.min(
                Math.max(progress, 0),
                100
              )}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}