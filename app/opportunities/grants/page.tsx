import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  HandCoins,
  HandHeart,
  Sprout,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import {
  getAgricultureSupportProjects,
  getWomenEmpowermentProjects,
  getYouthEmpowermentProjects,
} from "@/lib/opportunities";

export default function GrantsPage() {
  const youth = getYouthEmpowermentProjects();
  const women = getWomenEmpowermentProjects();
  const agriculture = getAgricultureSupportProjects();

  const grantRelated = [
    ...youth,
    ...women,
    ...agriculture,
  ].filter((project) => {
    const searchable = `${project.title} ${project.description}`.toLowerCase();

    return (
      searchable.includes("grant") ||
      searchable.includes("starter") ||
      searchable.includes("enterprise") ||
      searchable.includes("support")
    );
  });

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* Hero */}

        <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full bg-green-600/25 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <HandCoins size={17} />
                Grants & Enterprise Support
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Supporting enterprise and livelihoods
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore recorded grant, enterprise-support, agricultural and
                livelihood interventions available in the Benue South
                constituency register.
              </p>
            </div>
          </Container>
        </section>

        {/* Categories */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <HandHeart
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {women.length}
                </p>

                <p className="font-bold text-slate-900">
                  Women Support Records
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <BriefcaseBusiness
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {youth.length}
                </p>

                <p className="font-bold text-slate-900">
                  Youth & Enterprise Records
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <Sprout
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {agriculture.length}
                </p>

                <p className="font-bold text-slate-900">
                  Agriculture Support Records
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Grant & Support Register
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Enterprise and livelihood interventions
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                The records below are filtered from the broader empowerment
                register where available descriptions indicate grants,
                enterprise support or livelihood assistance.
              </p>
            </div>

            {grantRelated.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {grantRelated.map((project) => (
                  <article
                    key={project.id}
                    className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <HandCoins
                      size={23}
                      className="text-green-700"
                    />

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
                      View intervention
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <HandCoins
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  No grant-specific records currently identified
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Additional grant records will appear here as the
                  constituency register is enriched.
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