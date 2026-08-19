import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Sprout,
  Wrench,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import { explorerProjects } from "@/data/projectExplorer";

export default function SkillsDevelopmentPage() {
  const skillsProjects = explorerProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("training") ||
      text.includes("skill") ||
      text.includes("ict") ||
      text.includes("entrepreneur") ||
      text.includes("vocational") ||
      text.includes("value chain") ||
      text.includes("customer service") ||
      text.includes("acquisition centre") ||
      text.includes("acquisition center")
    );
  });

  const ictTraining = skillsProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("ict") ||
      text.includes("digital") ||
      text.includes("computer") ||
      text.includes("laptop")
    );
  });

  const vocational = skillsProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("vocational") ||
      text.includes("technical") ||
      text.includes("skill acquisition") ||
      text.includes("acquisition centre") ||
      text.includes("acquisition center")
    );
  });

  const entrepreneurship = skillsProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("entrepreneur") ||
      text.includes("enterprise") ||
      text.includes("business")
    );
  });

  const agriculture = skillsProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("agric") ||
      text.includes("value chain") ||
      text.includes("farm")
    );
  });

  const professional = skillsProjects.filter((project) => {
    const text =
      `${project.title} ${project.description}`.toLowerCase();

    return (
      text.includes("customer service") ||
      text.includes("professional") ||
      text.includes("capacity building")
    );
  });

  const categories = [
    {
      title: "ICT & Digital Skills",
      value: ictTraining.length,
      icon: Laptop,
      description:
        "ICT training, digital-skills development and technology-based capacity building.",
    },
    {
      title: "Vocational & Technical Skills",
      value: vocational.length,
      icon: Wrench,
      description:
        "Practical vocational training, technical skills and skills-acquisition interventions.",
    },
    {
      title: "Entrepreneurship Development",
      value: entrepreneurship.length,
      icon: BriefcaseBusiness,
      description:
        "Business, enterprise and entrepreneurship development programmes.",
    },
    {
      title: "Agricultural Value Chain",
      value: agriculture.length,
      icon: Sprout,
      description:
        "Agricultural training, value-chain development and agribusiness skills.",
    },
    {
      title: "Professional Capacity Building",
      value: professional.length,
      icon: GraduationCap,
      description:
        "Customer-service training, professional development and institutional capacity building.",
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
                <GraduationCap size={17} />
                Skills Development
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Building practical skills and human capital
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore skills-development interventions across ICT,
                vocational training, entrepreneurship, agricultural value
                chains and professional capacity building in Benue South.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#skills-register"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 font-bold !text-green-950 transition hover:bg-amber-300"
                >
                  Explore Skills Programmes
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
                <GraduationCap
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {skillsProjects.length}
                </p>

                <p className="font-bold text-slate-900">
                  Skills Interventions
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
                Development Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Skills development by intervention area
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These categories are derived from training and
                capacity-development records available in the constituency
                project register.
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

        {/* SKILLS REGISTER */}

        <section
          id="skills-register"
          className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Skills Development Register
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Recorded skills and training interventions
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Browse training, vocational, enterprise and
                capacity-development interventions currently recorded in the
                constituency intelligence register.
              </p>
            </div>

            {skillsProjects.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skillsProjects.map((project) => (
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
                <GraduationCap
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  No skills-development records currently available
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Training and skills-development records will appear here
                  as the constituency register is enriched.
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
                  Browse youth empowerment, women empowerment, scholarships,
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