import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  Landmark,
  Scale,
} from "lucide-react";

import { legislativeRecords } from "@/data/legislation";

import Container from "../ui/Container";

const typeIcons = {
  Act: BadgeCheck,
  Bill: FileText,
  Motion: Scale,
  Proposal: Landmark,
};

const typeStyles = {
  Act:
    "border-green-200 bg-green-50 text-green-800",

  Bill:
    "border-amber-200 bg-amber-50 text-amber-800",

  Motion:
    "border-purple-200 bg-purple-50 text-purple-800",

  Proposal:
    "border-blue-200 bg-blue-50 text-blue-800",
};

const legislativeTimeline = [
  {
    year: "2023",
    title: "Senate Minority Leader",
    description:
      "Assumed a major leadership responsibility in the 10th Senate.",
  },
  {
    year: "2024",
    title: "North Central Development Commission",
    description:
      "Advanced legislation for structured regional development.",
  },
  {
    year: "2025",
    title: "Federal University of Health Sciences Act",
    description:
      "The establishment legislation received presidential assent.",
  },
  {
    year: "2025",
    title: "Federal College of Agricultural Technology Act",
    description:
      "The establishment legislation received presidential assent.",
  },
  {
    year: "2026",
    title: "Teaching Hospital and Institutional Bills",
    description:
      "Further education and healthcare legislation continued through the Senate.",
  },
];

export default function LegislativeHighlights() {
  /* ======================================================
     LEGISLATIVE STATISTICS
  ====================================================== */

  const assentedActs = legislativeRecords.filter(
    (record) =>
      record.type === "Act" &&
      record.status === "Presidential Assent"
  );

  const billsInProgress = legislativeRecords.filter(
    (record) =>
      record.type === "Bill" &&
      record.status === "In Progress"
  );

  const motions = legislativeRecords.filter(
    (record) =>
      record.type === "Motion"
  );

  const proposals = legislativeRecords.filter(
    (record) =>
      record.type === "Proposal"
  );

  const legislativeStatistics = [
    {
      value: assentedActs.length,
      label: "Acts Assented",
      description:
        "Legislation recorded as having received presidential assent.",
    },
    {
      value: billsInProgress.length,
      label: "Bills in Progress",
      description:
        "Bills currently recorded as advancing through the legislative process.",
    },
    {
      value: motions.length,
      label: "Motions Recorded",
      description:
        "Individual motions currently available in the structured legislative register.",
    },
    {
      value: proposals.length,
      label: "Proposals",
      description:
        "Constitutional and institutional proposals currently recorded.",
    },
  ];

  /* ======================================================
     FEATURED HOMEPAGE RECORDS

     Priority:
     1. Assented Acts
     2. Bills in progress
     3. Proposals
     4. Motions
  ====================================================== */

  const legislativeHighlights = [
    ...assentedActs,
    ...billsInProgress,
    ...proposals,
    ...motions,
  ].slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
      {/* Decorative background */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-green-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-[20%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <Landmark
                  size={17}
                  aria-hidden="true"
                />

                National Assembly
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Legislative Achievements
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore Acts, Bills, Motions and constitutional or
                institutional proposals available in the legislative
                intelligence register.
              </p>
            </div>

            <Link
              href="/legislative-work"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 font-bold !text-white transition hover:bg-white/15 hover:!text-white"
            >
              Full Legislative Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* ==================================================
              STATISTICS
          ================================================== */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {legislativeStatistics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
              >
                <p className="text-2xl font-extrabold text-amber-300">
                  {item.value}
                </p>

                <p className="mt-1 font-bold text-white">
                  {item.label}
                </p>

                <p className="mt-2 text-sm leading-6 text-green-50/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ==================================================
              FEATURED LEGISLATIVE RECORDS
          ================================================== */}

          {legislativeHighlights.length > 0 && (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {legislativeHighlights.map((record) => {
                const Icon =
                  typeIcons[record.type];

                return (
                  <article
                    key={record.id}
                    className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-white p-6 text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon
                          size={23}
                          aria-hidden="true"
                        />
                      </div>

                      <span
                        className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${
                          typeStyles[record.type]
                        }`}
                      >
                        {record.type}
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                      {record.year}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold leading-7 text-slate-950">
                      {record.shortTitle ??
                        record.title}
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-amber-700">
                      {record.status}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {record.summary}
                    </p>

                    <Link
                      href={
                        record.href ??
                        `/legislative-work/${record.slug}`
                      }
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                    >
                      View legislative record
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          )}

          {/* ==================================================
              LEGISLATIVE TIMELINE
          ================================================== */}

          <div className="mt-12 rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur sm:p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={23}
                className="text-amber-300"
                aria-hidden="true"
              />

              <h3 className="text-2xl font-extrabold">
                Legislative Milestones
              </h3>
            </div>

            <div className="relative mt-8">
              <div className="absolute bottom-0 left-[11px] top-0 w-px bg-white/15 lg:left-0 lg:right-0 lg:top-[11px] lg:h-px lg:w-auto" />

              <div className="grid gap-7 lg:grid-cols-5">
                {legislativeTimeline.map((item) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="relative pl-9 lg:pl-0 lg:pt-8"
                  >
                    <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-green-950 bg-amber-400 lg:left-0 lg:top-0" />

                    <p className="text-sm font-extrabold text-amber-300">
                      {item.year}
                    </p>

                    <h4 className="mt-2 font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-green-50/65">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              CTA
          ================================================== */}

          <div className="mt-10 text-center">
            <Link
              href="/legislative-work"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-amber-400 px-8 font-extrabold !text-green-950 transition hover:bg-amber-300 hover:!text-green-950"
            >
              Explore Complete Legislative Portfolio
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}