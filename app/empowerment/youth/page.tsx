import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  Laptop,
  Sprout,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import {
  getYouthEmpowermentProjects,
} from "@/lib/opportunities";

export default function YouthEmpowermentPage() {
  const projects = getYouthEmpowermentProjects();

  const ict = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("ict") ||
      text.includes("digital") ||
      text.includes("laptop") ||
      text.includes("computer")
    );
  });

  const entrepreneurship = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("entrepreneur") ||
      text.includes("grant") ||
      text.includes("startup") ||
      text.includes("enterprise")
    );
  });

  const technicalSkills = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("skill") ||
      text.includes("technical") ||
      text.includes("block") ||
      text.includes("training")
    );
  });

  const agriculture = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("agric") ||
      text.includes("livestock") ||
      text.includes("herbicide") ||
      text.includes("farm")
    );
  });

  const sports = projects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("sport") ||
      text.includes("football") ||
      text.includes("complex")
    );
  });

  const categories = [
    {
      title: "ICT Empowerment",
      value: ict.length,
      icon: Laptop,
      description:
        "ICT training, laptop distribution and digital-skills interventions.",
    },
    {
      title: "Entrepreneurship",
      value: entrepreneurship.length,
      icon: BriefcaseBusiness,
      description:
        "Enterprise development, grants and start-up support for young people.",
    },
    {
      title: "Technical Skills",
      value: technicalSkills.length,
      icon: Wrench,
      description:
        "Vocational, technical and practical skills-development interventions.",
    },
    {
      title: "Agriculture",
      value: agriculture.length,
      icon: Sprout,
      description:
        "Youth-focused agricultural support, livestock and agribusiness interventions.",
    },
    {
      title: "Sports",
      value: sports.length,
      icon: Trophy,
      description:
        "Sports development and youth participation interventions.",
    },
  ];

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full bg-green-600/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-[15%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <Users size={17} />
                Youth Empowerment
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Building skills, enterprise and opportunity for young people
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore youth-focused interventions across ICT, enterprise,
                agriculture, technical skills, mobility and sports development
                in Benue South Senatorial District.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#youth-register"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 font-bold !text-green-950 transition hover:bg-amber-300"
                >
                  Explore Youth Interventions
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

        {/* ==================================================
            SUMMARY STATISTICS
        ================================================== */}

        <section className="relative z-20 -mt-6 pb-8">
          <Container>
            <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              <div className="p-6">
                <Users
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {projects.length}
                </p>

                <p className="font-bold text-slate-900">
                  Youth Interventions
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

        {/* ==================================================
            CATEGORY INTELLIGENCE
        ================================================== */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Youth Development Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Empowerment by intervention area
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These categories are derived from youth-focused records
                currently available in the constituency project register.
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

        {/* ==================================================
            YOUTH INTERVENTION REGISTER
        ================================================== */}

        <section
          id="youth-register"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Youth Intervention Register
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Recorded youth empowerment projects
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Browse youth-focused constituency interventions currently
                recorded in the project intelligence register.
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
                        <Users size={22} />
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
                <Users
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  No youth-specific records currently available
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Additional youth interventions will appear here as the
                  constituency project register is enriched.
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
                  Browse women empowerment, scholarships, skills development,
                  enterprise support and social intervention programmes.
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