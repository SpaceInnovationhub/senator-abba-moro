import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  HandCoins,
  HandHeart,
  Scissors,
  ShoppingBag,
  Wrench,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import {
  getWomenEmpowermentProjects,
} from "@/lib/opportunities";

export default function WomenEmpowermentPage() {
  const projects = getWomenEmpowermentProjects();

  const economicEmpowerment = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("sewing") ||
      text.includes("grinding") ||
      text.includes("refrigerator") ||
      text.includes("generator") ||
      text.includes("economic")
    );
  });

  const financialSupport = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("grant") ||
      text.includes("financial") ||
      text.includes("fund")
    );
  });

  const enterpriseSupport = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("saloon") ||
      text.includes("business") ||
      text.includes("starter") ||
      text.includes("enterprise")
    );
  });

  const vocationalTraining = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("training") ||
      text.includes("vocational") ||
      text.includes("skill")
    );
  });

  const equipmentSupport = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("equipment") ||
      text.includes("machine") ||
      text.includes("kit")
    );
  });

  const categories = [
    {
      title: "Economic Empowerment",
      value: economicEmpowerment.length,
      icon: ShoppingBag,
      description:
        "Income-generating support including vocational and household-enterprise equipment.",
    },
    {
      title: "Financial Support",
      value: financialSupport.length,
      icon: HandCoins,
      description:
        "Grant and financial-support interventions designed to strengthen women-owned enterprises.",
    },
    {
      title: "Enterprise Support",
      value: enterpriseSupport.length,
      icon: BriefcaseBusiness,
      description:
        "Business starter packs, enterprise kits and support for women-led small businesses.",
    },
    {
      title: "Skills Acquisition",
      value: vocationalTraining.length,
      icon: Scissors,
      description:
        "Vocational training, business-development support and practical skills acquisition.",
    },
    {
      title: "Vocational Equipment",
      value: equipmentSupport.length,
      icon: Wrench,
      description:
        "Tools, machines and equipment distributed to support livelihoods and enterprise.",
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
                Women Empowerment
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Strengthening women, enterprise and household livelihoods
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore women-focused empowerment interventions across
                enterprise support, vocational training, grants, business
                starter equipment and livelihood development in Benue South.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#women-register"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 font-bold !text-green-950 transition hover:bg-amber-300"
                >
                  Explore Women Interventions
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
            <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              <div className="p-6">
                <HandHeart
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {projects.length}
                </p>

                <p className="font-bold text-slate-900">
                  Women Interventions
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

        {/* CATEGORY INTELLIGENCE */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Women Development Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Empowerment by intervention area
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These categories are derived from women-focused interventions
                currently documented in the constituency project register.
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

        {/* WOMEN INTERVENTION REGISTER */}

        <section
          id="women-register"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Women Intervention Register
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Recorded women empowerment projects
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Browse women-focused constituency interventions currently
                available in the project intelligence register.
              </p>
            </div>

            {projects.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
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
                  No women-specific records currently available
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Additional women empowerment records will appear here as
                  the constituency project register is enriched.
                </p>
              </div>
            )}

            {/* CTA */}

            <div className="mt-10 flex flex-col justify-between gap-5 rounded-[24px] bg-green-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                  Empowerment Portfolio
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Explore other empowerment programmes
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-green-50/75">
                  Browse youth empowerment, scholarships, skills development,
                  grants and social intervention programmes across Benue
                  South.
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