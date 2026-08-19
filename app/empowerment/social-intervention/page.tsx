import Link from "next/link";

import {
  ArrowRight,
  HandHeart,
  PackageCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import { explorerProjects } from "@/data/projectExplorer";

export default function SocialInterventionPage() {
  const socialProjects = explorerProjects.filter((project) => {
    const text =
      `${project.title} ${project.description} ${project.category}`.toLowerCase();

    return (
      text.includes("rice") ||
      text.includes("relief") ||
      text.includes("community assistance") ||
      text.includes("social intervention") ||
      text.includes("support") ||
      text.includes("palliative")
    );
  });

  const reliefSupport = socialProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("relief") ||
      text.includes("palliative")
    );
  });

  const foodSupport = socialProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("rice") ||
      text.includes("food")
    );
  });

  const communitySupport = socialProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("community assistance") ||
      text.includes("community support") ||
      text.includes("support")
    );
  });

  const categories = [
    {
      title: "Relief Support",
      value: reliefSupport.length,
      icon: ShieldCheck,
      description:
        "Constituency relief and palliative support for vulnerable communities and households.",
    },
    {
      title: "Food Support",
      value: foodSupport.length,
      icon: PackageCheck,
      description:
        "Food-distribution interventions including documented rice and related support programmes.",
    },
    {
      title: "Community Assistance",
      value: communitySupport.length,
      icon: Users,
      description:
        "Community-support interventions intended to provide practical assistance to residents and groups.",
    },
  ];

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* HERO */}

        <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full bg-green-600/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-[15%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <HandHeart size={17} />
                Social Intervention
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Supporting households and communities across Benue South
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore documented constituency relief, food support,
                community assistance and other social-intervention records
                across Benue South Senatorial District.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#social-register"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 font-bold !text-green-950 transition hover:bg-amber-300"
                >
                  Explore Social Interventions
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/empowerment"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 font-bold !text-white transition hover:bg-white/15"
                >
                  All Empowerment
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* SUMMARY */}

        <section className="relative z-20 -mt-6 pb-8">
          <Container>
            <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 xl:grid-cols-4">
              <div className="p-6">
                <HandHeart
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {socialProjects.length}
                </p>

                <p className="font-bold text-slate-900">
                  Social Intervention Records
                </p>
              </div>

              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.title}
                    className="border-t border-slate-200 p-6 sm:border-l xl:border-t-0"
                  >
                    <Icon
                      size={24}
                      className="text-green-700"
                    />

                    <p className="mt-4 text-3xl font-extrabold text-green-950">
                      {category.value}
                    </p>

                    <p className="font-bold text-slate-900">
                      {category.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* INTERVENTION AREAS */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Social Support Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Social intervention by support area
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These categories are derived from constituency relief,
                food-support and community-assistance records currently
                available in the project register.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <article
                    key={category.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-green-700 shadow-sm">
                        {category.value}{" "}
                        {category.value === 1
                          ? "record"
                          : "records"}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SOCIAL INTERVENTION REGISTER */}

        <section
          id="social-register"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Social Intervention Register
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Recorded social-support interventions
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Browse constituency records containing relief,
                food-distribution and community-assistance interventions.
              </p>
            </div>

            {socialProjects.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {socialProjects.map((project) => (
                  <article
                    key={project.id}
                    className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <HandHeart size={22} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                      {project.lga === "Benue South"
                        ? "Constituency-wide"
                        : `${project.lga} LGA`}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold leading-7 text-slate-950">
                      {project.title}
                    </h3>

                    {project.community && (
                      <p className="mt-2 text-xs font-semibold text-amber-700">
                        {project.community}
                      </p>
                    )}

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
                <HandHeart
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  No social-intervention records currently available
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Additional social-support records will appear here as the
                  constituency project register is enriched.
                </p>
              </div>
            )}

            {/* DATA NOTICE */}

            <div className="mt-10 rounded-[24px] border border-blue-100 bg-blue-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                Public Register Notice
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                This page presents documented social-intervention records
                available in the constituency project register. Figures and
                intervention records may be expanded as additional verified
                constituency information becomes available.
              </p>
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col justify-between gap-5 rounded-[24px] bg-green-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                  Empowerment Portfolio
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Explore the complete empowerment record
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-green-50/75">
                  Browse youth empowerment, women empowerment,
                  scholarships, skills development and enterprise-support
                  interventions across Benue South.
                </p>
              </div>

              <Link
                href="/empowerment"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 text-sm font-bold !text-green-950 transition hover:bg-amber-300"
              >
                All Empowerment
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