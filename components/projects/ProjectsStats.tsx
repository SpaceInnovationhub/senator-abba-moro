import {
  Archive,
  Building2,
  CheckCircle2,
  Clock3,
  Info,
  Landmark,
  MapPinned,
} from "lucide-react";

import { explorerProjects } from "@/data/projectExplorer";
import { getConstituencyWideProjects } from "@/lib/intelligence";

import Container from "../ui/Container";

export default function ProjectsStats() {
  /* ======================================================
     STATUS COUNTS
  ====================================================== */

  const completed = explorerProjects.filter(
    (project) => project.status === "Completed"
  ).length;

  const ongoing = explorerProjects.filter(
    (project) => project.status === "Ongoing"
  ).length;

  const recorded = explorerProjects.filter(
    (project) => project.status === "Recorded"
  ).length;

  const budget2026 = explorerProjects.filter(
    (project) => project.status === "2026 Budget"
  ).length;

  const planned = explorerProjects.filter(
    (project) => project.status === "Planned"
  ).length;

  /* ======================================================
     COVERAGE COUNTS
  ====================================================== */

  const constituencyWide =
    getConstituencyWideProjects();

  const lgasCovered = new Set(
    explorerProjects
      .filter(
        (project) =>
          project.lga !== "Benue South"
      )
      .map((project) => project.lga)
  ).size;

  /* ======================================================
     RECONCILIATION
  ====================================================== */

  const reconciledTotal =
    completed +
    ongoing +
    recorded +
    budget2026 +
    planned;

  const totalsMatch =
    reconciledTotal === explorerProjects.length;

  /* ======================================================
     PRIMARY METRICS
  ====================================================== */

  const stats = [
    {
      title: "Registered Interventions",
      value: explorerProjects.length,
      description:
        "All development and constituency interventions currently available in the public register.",
      icon: Building2,
    },
    {
      title: "Completed",
      value: completed,
      description:
        "Projects explicitly recorded as completed.",
      icon: CheckCircle2,
    },
    {
      title: "Ongoing",
      value: ongoing,
      description:
        "Projects explicitly recorded as currently under implementation.",
      icon: Clock3,
    },
    {
      title: "Recorded",
      value: recorded,
      description:
        "Intervention records where implementation status has not yet been published.",
      icon: Archive,
    },
    {
      title: "2026 Budget",
      value: budget2026,
      description:
        "Projects recorded as part of the 2026 Federal Budget facilitation portfolio.",
      icon: Landmark,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 pb-8">
      <Container>
        {/* ==================================================
            PRIMARY METRICS
        ================================================== */}

        <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="
                  border-b border-slate-200 p-6
                  sm:border-r
                  xl:border-b-0
                  xl:last:border-r-0
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon
                    size={23}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-5 text-3xl font-extrabold text-green-950">
                  {stat.value}
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {stat.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            STATUS RECONCILIATION
        ================================================== */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div
            className={`flex items-start gap-4 rounded-2xl border px-5 py-4 sm:px-6 ${
              totalsMatch
                ? "border-green-200 bg-green-50"
                : "border-red-200 bg-red-50"
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                totalsMatch
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <Info
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <p
                className={`font-bold ${
                  totalsMatch
                    ? "text-green-950"
                    : "text-red-900"
                }`}
              >
                Project register status reconciliation
              </p>

              <p className="mt-1 text-sm leading-7 text-slate-700">
                {completed} completed +{" "}
                {ongoing} ongoing +{" "}
                {recorded} recorded +{" "}
                {budget2026} 2026 Budget +{" "}
                {planned} planned ={" "}
                <strong>
                  {reconciledTotal}
                </strong>{" "}
                registered interventions.
              </p>

              {!totalsMatch && (
                <p className="mt-2 text-sm font-semibold text-red-700">
                  The status totals do not currently match the project
                  register. Review `projectExplorer.ts` for an unsupported
                  or misspelled status value.
                </p>
              )}
            </div>
          </div>

          {/* LGA COVERAGE */}

          <div className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
              <MapPinned
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-2xl font-extrabold text-green-950">
                {lgasCovered}
              </p>

              <p className="text-sm font-bold text-slate-900">
                LGAs Represented
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            CONSTITUENCY-WIDE INFORMATION
        ================================================== */}

        {constituencyWide.length > 0 && (
          <div className="mt-4 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <MapPinned
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="font-bold text-slate-950">
                Constituency-wide programmes
              </p>

              <p className="mt-1 text-sm leading-7 text-slate-700">
                <strong className="text-blue-700">
                  {constituencyWide.length}
                </strong>{" "}
                {constituencyWide.length === 1
                  ? "intervention is"
                  : "interventions are"}{" "}
                recorded as serving the wider Benue South Senatorial
                District. These records form part of the overall register
                but are not assigned to a single LGA.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}