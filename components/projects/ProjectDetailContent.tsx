import Image from "next/image";
import Link from "next/link";

import {
  FileText,
  Target,
  Users,
} from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

import ProjectEngagement from "./ProjectEngagement";
import ProjectIntelligencePanel from "./ProjectIntelligencePanel";
import ProjectLgaContext from "./ProjectLgaContext";
import ProjectLocationPanel from "./ProjectLocationPanel";

import Container from "../ui/Container";

interface ProjectDetailContentProps {
  project: IntelligenceProject;
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  const hasProgress =
    typeof project.progress === "number";

  const safeProgress = hasProgress
    ? Math.min(Math.max(project.progress as number, 0), 100)
    : null;

  const milestones = project.milestones ?? [
    {
      date: "Planning",
      title: "Project Identification",
      description:
        "The project was identified as a constituency development priority.",
      completed: true,
    },
    {
      date: "Implementation",
      title: "Project Delivery",
      description:
        "Implementation information will be updated as verified project records become available.",
      completed:
        typeof safeProgress === "number"
          ? safeProgress >= 50
          : false,
    },
    {
      date: "Completion",
      title: "Final Delivery",
      description:
        "Completion information will be published when verified.",
      completed:
        typeof safeProgress === "number"
          ? safeProgress === 100
          : false,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="min-w-0">
            {/* Project Overview */}

            <section>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                Development purpose and expected impact
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {project.description}
              </p>
            </section>

            {/* Implementation Progress */}

            <section className="mt-12 rounded-[28px] bg-green-950 p-7 text-white sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                    Implementation Progress
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold">
                    {hasProgress
                      ? `${safeProgress}% completed`
                      : "Progress not yet published"}
                  </h2>
                </div>

                <Target
                  size={42}
                  className="shrink-0 text-amber-300"
                  aria-hidden="true"
                />
              </div>

              {hasProgress && safeProgress !== null ? (
                <>
                  <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all duration-500"
                      style={{
                        width: `${safeProgress}%`,
                      }}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-green-50/75">
                    The displayed progress figure should be updated whenever
                    verified implementation information becomes available.
                  </p>
                </>
              ) : (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm leading-7 text-green-50/75">
                    A verified implementation percentage is not currently
                    available for this record. Progress information will be
                    published when confirmed.
                  </p>
                </div>
              )}
            </section>

            {/* Beneficiaries */}

            <section className="mt-12">
              <div className="flex items-center gap-3">
                <Users
                  size={24}
                  className="shrink-0 text-green-700"
                  aria-hidden="true"
                />

                <h2 className="text-3xl font-extrabold text-slate-950">
                  Beneficiary communities
                </h2>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-base leading-8 text-slate-700">
                  {project.beneficiaries ??
                    (project.lga === "Benue South"
                      ? "Constituency-wide beneficiaries across Benue South"
                      : `${project.community} and surrounding communities`)}
                </p>
              </div>
            </section>

            {/* LGA Context */}

            {project.lga !== "Benue South" && (
              <ProjectLgaContext project={project} />
            )}

            {/* Constituency-wide Context */}

            {project.lga === "Benue South" && (
              <section className="mt-12 rounded-[26px] border border-green-100 bg-green-50 p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                  Constituency-wide Intervention
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-green-950">
                  Benue South Senatorial District
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This programme is recorded as a constituency-wide
                  intervention rather than an initiative assigned to one
                  specific Local Government Area.
                </p>

                <Link
                  href="/constituency"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
                >
                  Explore Benue South
                  <span aria-hidden="true">→</span>
                </Link>
              </section>
            )}

            {/* Timeline */}

            <section className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Project Timeline
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                Major implementation milestones
              </h2>

              <div className="relative mt-8 space-y-7">
                <div className="absolute bottom-0 left-[11px] top-0 w-px bg-green-200" />

                {milestones.map((milestone) => (
                  <div
                    key={`${milestone.date}-${milestone.title}`}
                    className="relative pl-10"
                  >
                    <span
                      className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-white shadow ${
                        milestone.completed
                          ? "bg-green-700"
                          : "bg-slate-300"
                      }`}
                    />

                    <p className="text-sm font-bold text-amber-700">
                      {milestone.date}
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}

            {project.lga !== "Benue South" && (
              <ProjectLocationPanel project={project} />
            )}

            {/* Engagement */}

            <ProjectEngagement project={project} />

            {/* Gallery */}

            {project.gallery && project.gallery.length > 0 && (
              <section className="mt-12">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                  Project Gallery
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                  Images and implementation evidence
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                  Visual records documenting project implementation,
                  constituency activities and available development evidence.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="relative h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} project image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="min-w-0">
            <div className="space-y-6 lg:sticky lg:top-[110px]">
              {/* Project Intelligence */}

              <ProjectIntelligencePanel project={project} />

              {/* Documents */}

              {project.documents &&
                project.documents.length > 0 && (
                  <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <FileText
                        size={21}
                        className="shrink-0 text-green-700"
                        aria-hidden="true"
                      />

                      <h3 className="text-lg font-extrabold text-slate-950">
                        Project Documents
                      </h3>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Available project reports, records and supporting
                      documents.
                    </p>

                    <div className="mt-5 space-y-3">
                      {project.documents.map((document) => (
                        <a
                          key={document.title}
                          href={document.href}
                          className="group block rounded-xl border border-transparent bg-slate-50 p-4 transition hover:border-green-100 hover:bg-green-50"
                        >
                          <p className="text-sm font-bold text-slate-900 transition group-hover:text-green-800">
                            {document.title}
                          </p>

                          <p className="mt-1 text-xs font-medium text-slate-500">
                            {document.type}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {/* Public Project Register */}

              <div className="rounded-[24px] bg-green-800 p-6 text-white shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-300">
                  Public Project Register
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-white">
                  Explore more constituency projects
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/75">
                  Browse infrastructure, education, healthcare, empowerment
                  and other development interventions across Benue South.
                </p>

                <Link
                  href="/projects"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold !text-white transition hover:gap-3 hover:!text-white"
                >
                  View all projects
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* LGA / Constituency shortcut */}

              {project.lga === "Benue South" ? (
                <div className="rounded-[24px] border border-green-100 bg-green-50 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                    Constituency Coverage
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-green-950">
                    Benue South
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    This intervention is recorded as serving the broader
                    senatorial district.
                  </p>

                  <Link
                    href="/constituency"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
                  >
                    View Constituency Intelligence
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ) : (
                <div className="rounded-[24px] border border-green-100 bg-green-50 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                    Local Government
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-green-950">
                    {project.lga} LGA
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Explore registered development sectors and constituency
                    interventions connected to {project.lga}.
                  </p>

                  <Link
                    href={`/constituency/${project.lga.toLowerCase()}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
                  >
                    View LGA Intelligence
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}