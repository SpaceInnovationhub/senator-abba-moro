import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Landmark,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import {
  getScholarshipProjects,
} from "@/lib/opportunities";

export default function ScholarshipsPage() {
  const scholarships = getScholarshipProjects();

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* Hero */}

        <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full bg-green-600/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-[18%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <GraduationCap size={17} />
                Scholarships & Education Support
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Expanding access to education
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore scholarship and education-support interventions
                recorded for students and beneficiaries across Benue South
                Senatorial District.
              </p>
            </div>
          </Container>
        </section>

        {/* Summary */}

        <section className="relative z-20 -mt-6 pb-8">
          <Container>
            <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-3">
              <div className="p-6">
                <GraduationCap
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {scholarships.length}
                </p>

                <p className="font-bold text-slate-900">
                  Scholarship Records
                </p>
              </div>

              <div className="border-t border-slate-200 p-6 sm:border-l sm:border-t-0">
                <BookOpen
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  Education
                </p>

                <p className="font-bold text-slate-900">
                  Human Capital Support
                </p>
              </div>

              <div className="border-t border-slate-200 p-6 sm:border-l sm:border-t-0">
                <Landmark
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  Benue South
                </p>

                <p className="font-bold text-slate-900">
                  Constituency Coverage
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Scholarship records */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Scholarship Register
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Education support interventions
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These records represent scholarship and education-support
                interventions currently documented in the constituency
                project register.
              </p>
            </div>

            {scholarships.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {scholarships.map((project) => (
                  <article
                    key={project.id}
                    className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <GraduationCap size={22} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs font-bold text-green-700">
                      {project.lga === "Benue South"
                        ? "Constituency-wide"
                        : `${project.lga} LGA`}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                    >
                      View record
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <GraduationCap
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  No scholarship records currently available
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Scholarship records will appear here as they are added to
                  the constituency register.
                </p>
              </div>
            )}

            <div className="mt-10 text-center">
              <Link
                href="/opportunities"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-800 px-6 font-bold !text-white transition hover:bg-green-700"
              >
                Back to Opportunities
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