import Link from "next/link";

import {
  ArrowRight,
  HandHeart,
  Laptop,
  Sprout,
  Users,
} from "lucide-react";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import {
  getAgricultureSupportProjects,
  getIctProjects,
  getWomenEmpowermentProjects,
  getYouthEmpowermentProjects,
} from "@/lib/opportunities";

export default function EmpowermentPage() {
  const youthProjects =
    getYouthEmpowermentProjects();

  const womenProjects =
    getWomenEmpowermentProjects();

  const agricultureProjects =
    getAgricultureSupportProjects();

  const ictProjects =
    getIctProjects();

  const totalEmpowerment =
    youthProjects.length +
    womenProjects.length +
    agricultureProjects.length +
    ictProjects.length;

  const categories = [
    {
      title: "Youth Empowerment",
      value: youthProjects.length,
      description:
        "Skills development, entrepreneurship, ICT support, mobility interventions, technical equipment and youth development programmes.",
      href: "/projects?category=Youth%20Empowerment",
      icon: Users,
    },
    {
      title: "Women Empowerment",
      value: womenProjects.length,
      description:
        "Economic empowerment, vocational equipment, enterprise support, grants and business development interventions for women.",
      href: "/projects?category=Women%20Empowerment",
      icon: HandHeart,
    },
    {
      title: "Agriculture & Farmers Support",
      value: agricultureProjects.length,
      description:
        "Agricultural inputs, equipment, livestock support, training and value-chain development programmes.",
      href: "/projects?category=Agriculture",
      icon: Sprout,
    },
    {
      title: "ICT & Digital Skills",
      value: ictProjects.length,
      description:
        "ICT training, digital-skills development, laptop distribution and technology empowerment interventions.",
      href: "/projects?category=ICT",
      icon: Laptop,
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

          <div className="pointer-events-none absolute -bottom-32 left-[18%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <HandHeart size={17} />
                Empowerment Programmes
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Empowering people across Benue South
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore youth empowerment, women-focused interventions,
                agricultural support, ICT development and other programmes
                designed to strengthen livelihoods and human capital across
                Benue South Senatorial District.
              </p>
            </div>
          </Container>
        </section>

        {/* ==================================================
            SUMMARY
        ================================================== */}

        <section className="relative z-20 -mt-6 pb-8">
          <Container>
            <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 xl:grid-cols-5">
              <div className="p-6">
                <HandHeart
                  size={24}
                  className="text-green-700"
                />

                <p className="mt-4 text-3xl font-extrabold text-green-950">
                  {totalEmpowerment}
                </p>

                <p className="font-bold text-slate-900">
                  Empowerment Interventions
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
            EMPOWERMENT CATEGORIES
        ================================================== */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Empowerment Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Explore empowerment interventions
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Browse programmes by empowerment area and view the
                corresponding interventions in the constituency project
                register.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <article
                    key={category.title}
                    className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-extrabold text-green-700">
                        {category.value}{" "}
                        {category.value === 1
                          ? "record"
                          : "records"}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
                      {category.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>

                    <Link
                      href={category.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                    >
                      Explore interventions
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* ==================================================
                OPPORTUNITIES CTA
            ================================================== */}

            <div className="mt-10 flex flex-col justify-between gap-5 rounded-[24px] bg-green-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                  Opportunities Portal
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Explore more opportunities
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-green-50/75">
                  View scholarships, empowerment interventions and other
                  support programmes available through the constituency
                  portal.
                </p>
              </div>

              <Link
                href="/opportunities"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 text-sm font-bold !text-green-950 transition hover:bg-amber-300"
              >
                All Opportunities
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