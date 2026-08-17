import Link from "next/link";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Info,
  Landmark,
  MapPinned,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import {
  getAllLgas,
  getBudget2026Projects,
  getCompletedProjects,
  getConstituencyWideProjects,
  getOngoingProjects,
  getProjectSummaryByLga,
} from "@/lib/intelligence";

export default function ConstituencyPage() {
  const lgas = getAllLgas();

  const completed = getCompletedProjects();
  const ongoing = getOngoingProjects();
  const budget2026 = getBudget2026Projects();
  const constituencyWide = getConstituencyWideProjects();

  const projectSummary = getProjectSummaryByLga();

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-green-600/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-[18%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <MapPinned size={17} />
                Benue South Intelligence
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Explore development across Benue South
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore Local Government Areas, constituency projects,
                development indicators and legislative interventions across
                Benue South Senatorial District.
              </p>
            </div>
          </Container>
        </section>

        {/* ==================================================
            CONSTITUENCY METRICS
        ================================================== */}

        <section className="relative z-20 -mt-6 pb-8">
          <Container>
            <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 xl:grid-cols-4">
              {/* LGAs */}

              <div className="p-6">
                <MapPinned
                  size={24}
                  className="text-green-700"
                  aria-hidden="true"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {lgas.length}
                </p>

                <p className="font-bold text-slate-900">
                  Local Government Areas
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The nine Local Government Areas that make up Benue South
                  Senatorial District.
                </p>
              </div>

              {/* Completed */}

              <div className="border-t border-slate-200 p-6 sm:border-l sm:border-t-0">
                <CheckCircle2
                  size={24}
                  className="text-green-700"
                  aria-hidden="true"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {completed.length}
                </p>

                <p className="font-bold text-slate-900">
                  Completed Projects
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Projects explicitly recorded as completed in the current
                  constituency register.
                </p>
              </div>

              {/* Ongoing */}

              <div className="border-t border-slate-200 p-6 xl:border-l xl:border-t-0">
                <Clock3
                  size={24}
                  className="text-green-700"
                  aria-hidden="true"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {ongoing.length}
                </p>

                <p className="font-bold text-slate-900">
                  Ongoing Projects
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Development interventions explicitly recorded as currently
                  under implementation.
                </p>
              </div>

              {/* 2026 Budget */}

              <div className="border-t border-slate-200 p-6 sm:border-l xl:border-t-0">
                <Landmark
                  size={24}
                  className="text-green-700"
                  aria-hidden="true"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {budget2026.length}
                </p>

                <p className="font-bold text-slate-900">
                  2026 Budget Projects
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Projects identified within the constituency&apos;s 2026 Federal
                  Budget facilitation portfolio.
                </p>
              </div>
            </div>

            {/* ==================================================
                CONSTITUENCY-WIDE INFORMATION BANNER
            ================================================== */}

            {constituencyWide.length > 0 && (
              <div className="mt-5 flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 sm:px-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Info
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-bold text-green-950">
                    Constituency-wide interventions
                  </p>

                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    <strong className="font-extrabold text-green-800">
                      {constituencyWide.length}
                    </strong>{" "}
                    {constituencyWide.length === 1
                      ? "intervention is"
                      : "interventions are"}{" "}
                    recorded as programmes serving the wider Benue South
                    Senatorial District. They are included in the overall
                    public project register but are not added to the total of
                    any single Local Government Area.
                  </p>

                  <Link
                    href="/projects?lga=Benue%20South"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
                  >
                    View constituency-wide interventions
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </section>

        {/* ==================================================
            LGA INTELLIGENCE
        ================================================== */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                LGA Intelligence
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Development by Local Government Area
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Select a Local Government Area to explore its registered
                projects, development sectors and constituency interventions.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectSummary.map((item) => (
                <article
                  key={item.lga}
                  className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Header */}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                      <Building2
                        size={22}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      {item.total}{" "}
                      {item.total === 1
                        ? "project"
                        : "projects"}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
                    {item.lga} LGA
                  </h3>

                  {/* Status intelligence */}

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 2xl:grid-cols-4">
                    {/* Completed */}

                    <div className="rounded-xl bg-green-50 p-3 text-center">
                      <p className="text-lg font-extrabold text-green-700">
                        {item.completed}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Completed
                      </p>
                    </div>

                    {/* Ongoing */}

                    <div className="rounded-xl bg-amber-50 p-3 text-center">
                      <p className="text-lg font-extrabold text-amber-600">
                        {item.ongoing}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Ongoing
                      </p>
                    </div>

                    {/* Recorded */}

                    <div className="rounded-xl bg-slate-100 p-3 text-center">
                      <p className="text-lg font-extrabold text-slate-700">
                        {item.recorded}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Recorded
                      </p>
                    </div>

                    {/* 2026 Budget */}

                    <div className="rounded-xl bg-blue-50 p-3 text-center">
                      <p className="text-lg font-extrabold text-blue-700">
                        {item.budget2026}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        2026 Budget
                      </p>
                    </div>
                  </div>

                  {/* Link */}

                  <Link
                    href={`/constituency/${item.lga.toLowerCase()}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                  >
                    View {item.lga} Intelligence
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>

            {/* ==================================================
                PROJECT REGISTER CTA
            ================================================== */}

            <div className="mt-10 flex flex-col justify-between gap-5 rounded-[24px] bg-green-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                  Public Project Register
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white">
                  Explore the complete development register
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-green-50/75">
                  Search roads, bridges, healthcare, education,
                  electrification, water, empowerment and other interventions
                  across Benue South.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 text-sm font-bold !text-green-950 transition hover:bg-amber-300"
              >
                Explore All Projects
                <ArrowRight size={17} />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}