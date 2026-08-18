import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  HandHeart,
  Users,
} from "lucide-react";

import Container from "../ui/Container";

export default function OpportunityHero() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full bg-green-600/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-[15%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
              <HandHeart size={17} />
              Empowerment & Opportunities
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Opportunities for growth across Benue South
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
              Explore empowerment programmes, scholarships, skills
              development, agricultural support and other constituency
              interventions for residents of Benue South.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#opportunities"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 font-bold !text-green-950 transition hover:bg-amber-300"
              >
                Explore Opportunities
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 font-bold !text-white transition hover:bg-white/15"
              >
                Project Register
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <Users
                size={24}
                className="text-amber-300"
              />

              <p className="mt-4 font-extrabold text-white">
                Youth
              </p>

              <p className="mt-1 text-xs leading-5 text-green-50/60">
                Skills, enterprise and mobility support
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <HandHeart
                size={24}
                className="text-amber-300"
              />

              <p className="mt-4 font-extrabold text-white">
                Women
              </p>

              <p className="mt-1 text-xs leading-5 text-green-50/60">
                Enterprise and economic empowerment
              </p>
            </div>

            <div className="col-span-2 rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <GraduationCap
                size={24}
                className="text-amber-300"
              />

              <p className="mt-4 font-extrabold text-white">
                Scholarships & Human Capital
              </p>

              <p className="mt-1 text-xs leading-5 text-green-50/60">
                Education, ICT and professional development support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}