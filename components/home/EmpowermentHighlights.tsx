import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

import { empowermentHighlights } from "@/data/empowermentHighlights";

import Container from "../ui/Container";

const accentStyles = {
  green: {
    icon: "bg-green-100 text-green-800",
    badge: "bg-green-50 text-green-700 border-green-100",
    hover:
      "hover:border-green-200 hover:bg-green-50/50",
  },
  amber: {
    icon: "bg-amber-100 text-amber-800",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    hover:
      "hover:border-amber-200 hover:bg-amber-50/40",
  },
  blue: {
    icon: "bg-blue-100 text-blue-800",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    hover:
      "hover:border-blue-200 hover:bg-blue-50/40",
  },
};

export default function EmpowermentHighlights() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
              <HeartHandshake size={17} />
              Empowerment and Human Capital
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Building skills, enterprises and sustainable livelihoods
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore constituency interventions supporting young people,
              women, students, farmers, entrepreneurs and skilled workers
              across Benue South.
            </p>
          </div>

          <Link
            href="/empowerment"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-green-700 px-6 font-bold text-green-700 transition hover:bg-green-50"
          >
            View All Programmes
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Highlight cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {empowermentHighlights.map((item) => {
            const Icon = item.icon;
            const styles = accentStyles[item.accent];

            return (
              <article
                key={item.id}
                className={`group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.hover}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon}`}
                  >
                    <Icon size={27} />
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] ${styles.badge}`}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold leading-snug text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">
                  {item.interventions.map((intervention) => (
                    <div
                      key={intervention}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-green-700"
                      />

                      <p className="text-sm leading-6 text-slate-700">
                        {intervention}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-green-700 transition group-hover:gap-3"
                >
                  Explore programmes
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Summary strip */}

        <div className="mt-8 grid overflow-hidden rounded-[24px] border border-slate-200 bg-green-950 text-white md:grid-cols-3">
          <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-300">
              Skills Development
            </p>

            <p className="mt-3 text-sm leading-7 text-green-50/75">
              ICT, vocational, technical, agricultural and entrepreneurship
              training programmes.
            </p>
          </div>

          <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-300">
              Enterprise Support
            </p>

            <p className="mt-3 text-sm leading-7 text-green-50/75">
              Grants, business equipment, starter packs and mobility assets
              supporting sustainable enterprises.
            </p>
          </div>

          <div className="p-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-300">
              Human Capital
            </p>

            <p className="mt-3 text-sm leading-7 text-green-50/75">
              Scholarships, education support and specialised training for
              students and emerging professionals.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}