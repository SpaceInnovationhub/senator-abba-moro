import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  Landmark,
  Scale,
  Target,
  Users,
} from "lucide-react";

import type { LegislativeRecord } from "@/data/legislation";

import Container from "../ui/Container";

interface LegislativeRecordContentProps {
  record: LegislativeRecord;
}

export default function LegislativeRecordContent({
  record,
}: LegislativeRecordContentProps) {
  const objectives = record.objectives ?? [
    "Advance legislation addressing an identified public need.",
    "Support inclusive development and institutional progress.",
    "Improve public service delivery and national development outcomes.",
  ];

  const beneficiaries = record.beneficiaries ?? [
    "Residents of Benue South",
    "Relevant public institutions",
    "Communities and development stakeholders",
  ];

  const impact =
    record.impact ??
    "Detailed impact information will be published as verified legislative records become available.";

  const hasProceduralData =
    record.billNumber ||
    record.dateIntroduced ||
    record.secondReadingDate ||
    record.committee ||
    record.passedDate ||
    record.legislativeSession ||
    (record.sponsors &&
      record.sponsors.length > 0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* ==================================================
              MAIN CONTENT
          ================================================== */}

          <div className="min-w-0">
            {/* Background */}

            <section>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Legislative Background
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                Background and purpose
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {record.background ?? record.summary}
              </p>
            </section>

            {/* Impact */}

            <section className="mt-12 rounded-[28px] bg-green-950 p-7 text-white sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-green-950">
                <Target size={27} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                Legislative Impact
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                Public and institutional impact
              </h2>

              <p className="mt-5 text-base leading-8 text-green-50/75 sm:text-lg">
                {impact}
              </p>
            </section>

            {/* Objectives */}

            <section className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Key Objectives
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                What the legislation seeks to achieve
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {objectives.map((objective) => (
                  <div
                    key={objective}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-700"
                    />

                    <p className="text-sm leading-7 text-slate-700">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Beneficiaries */}

            <section className="mt-12">
              <div className="flex items-center gap-3">
                <Users
                  size={24}
                  className="text-green-700"
                />

                <h2 className="text-3xl font-extrabold text-slate-950">
                  Expected beneficiaries
                </h2>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {beneficiaries.map((beneficiary) => (
                  <div
                    key={beneficiary}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="font-semibold leading-7 text-slate-800">
                      {beneficiary}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Procedural Intelligence */}

            {hasProceduralData && (
              <section className="mt-12">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                  Legislative Intelligence
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                  Procedural record
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {record.billNumber && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Bill Number
                      </p>

                      <p className="mt-2 text-lg font-extrabold text-slate-950">
                        {record.billNumber}
                      </p>
                    </div>
                  )}

                  {record.legislativeSession && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Legislative Session
                      </p>

                      <p className="mt-2 text-lg font-extrabold text-slate-950">
                        {record.legislativeSession}
                      </p>
                    </div>
                  )}

                  {record.dateIntroduced && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Introduced
                      </p>

                      <p className="mt-2 font-bold text-slate-950">
                        {record.dateIntroduced}
                      </p>
                    </div>
                  )}

                  {record.secondReadingDate && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Second Reading
                      </p>

                      <p className="mt-2 font-bold text-slate-950">
                        {record.secondReadingDate}
                      </p>
                    </div>
                  )}

                  {record.committee && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Committee Referral
                      </p>

                      <p className="mt-2 font-bold leading-6 text-slate-950">
                        {record.committee}
                      </p>

                      {record.committeeReportingPeriod && (
                        <p className="mt-2 text-sm text-slate-500">
                          Reporting period:{" "}
                          {record.committeeReportingPeriod}
                        </p>
                      )}
                    </div>
                  )}

                  {record.passedDate && (
                    <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        Senate Passage
                      </p>

                      <p className="mt-2 font-extrabold text-green-950">
                        {record.passedDate}
                      </p>
                    </div>
                  )}

                  {record.sponsors &&
                    record.sponsors.length > 0 && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                          Sponsor
                          {record.sponsors.length > 1
                            ? "s"
                            : ""}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {record.sponsors.map(
                            (sponsor) => (
                              <span
                                key={sponsor}
                                className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-800 shadow-sm"
                              >
                                {sponsor}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </section>
            )}

            {/* Current Status */}

            <section className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Legislative Status
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                Current legislative position
              </h2>

              <div className="mt-6 flex items-start gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <Scale
                  size={24}
                  className="mt-0.5 shrink-0 text-green-700"
                />

                <div>
                  <p className="font-extrabold text-slate-950">
                    {record.status}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {record.stage ??
                      "Detailed legislative-stage information will be published when verified records are available."}
                  </p>
                </div>
              </div>
            </section>

            {/* Timeline */}

            {record.milestones &&
              record.milestones.length > 0 && (
                <section className="mt-12">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                    Legislative Journey
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                    Major legislative milestones
                  </h2>

                  <div className="relative mt-8 space-y-6">
                    <div className="absolute bottom-0 left-[11px] top-0 w-px bg-green-200" />

                    {record.milestones.map(
                      (milestone) => (
                        <div
                          key={`${milestone.date}-${milestone.title}`}
                          className="relative pl-10"
                        >
                          <span className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-white bg-green-700 shadow" />

                          <p className="text-sm font-bold text-amber-700">
                            {milestone.date}
                          </p>

                          <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                            {milestone.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {milestone.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* Verification notice */}

            <section className="mt-12 rounded-[24px] border border-blue-100 bg-blue-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                Information & Verification Notice
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Legislative information displayed on this portal is compiled
                from available constituency records and public legislative
                documentation. Records may be updated as additional official
                documents, procedural dates or final legislative outcomes
                become available.
              </p>
            </section>
          </div>
          {record.sourceTitle && record.sourceUrl && (
            <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                Official Source Record
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-slate-950">
                {record.sourceTitle}
              </h3>

              {record.sourceType && (
                <p className="mt-1 text-sm text-slate-500">
                  {record.sourceType}
                </p>
              )}

              <a
                href={record.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
              >
                View official source
                <ArrowRight size={16} />
              </a>
            </section>
          )}

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="min-w-0">
            <div className="space-y-6 lg:sticky lg:top-[110px]">
              {/* Record Summary */}

              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                  Record Summary
                </p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Record Type
                    </dt>

                    <dd className="mt-1 font-bold text-slate-900">
                      {record.type}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </dt>

                    <dd className="mt-1 font-bold text-slate-900">
                      {record.status}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Year
                    </dt>

                    <dd className="mt-1 font-bold text-slate-900">
                      {record.year}
                    </dd>
                  </div>

                  {record.billNumber && (
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Bill Number
                      </dt>

                      <dd className="mt-1 font-bold text-slate-900">
                        {record.billNumber}
                      </dd>
                    </div>
                  )}

                  {record.category && (
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Policy Area
                      </dt>

                      <dd className="mt-1 font-bold text-slate-900">
                        {record.category}
                      </dd>
                    </div>
                  )}

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Institution
                    </dt>

                    <dd className="mt-1 flex items-center gap-2 font-bold text-slate-900">
                      <Landmark
                        size={16}
                        className="text-green-700"
                      />
                      National Assembly
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Documents */}

              {record.documents &&
                record.documents.length > 0 && (
                  <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <FileText
                        size={21}
                        className="text-green-700"
                      />

                      <h3 className="text-lg font-extrabold text-slate-950">
                        Documents
                      </h3>
                    </div>

                    <div className="mt-5 space-y-3">
                      {record.documents.map(
                        (document) => (
                          <a
                            key={`${document.title}-${document.href}`}
                            href={document.href}
                            className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 p-4 transition hover:bg-green-50"
                          >
                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                {document.title}
                              </p>

                              <p className="mt-1 text-xs text-slate-500">
                                {document.type}
                              </p>
                            </div>

                            <Download
                              size={18}
                              className="shrink-0 text-green-700"
                            />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Portfolio CTA */}

              <div className="rounded-[24px] bg-green-800 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-300">
                  Legislative Portfolio
                </p>

                <p className="mt-3 text-sm leading-7 text-green-50/75">
                  Explore other Acts, Bills, Motions and constitutional or
                  institutional proposals in the legislative register.
                </p>

                <Link
                  href="/legislative-work"
                  className="mt-5 inline-flex items-center gap-2 font-bold !text-white transition hover:gap-3 hover:!text-white"
                >
                  View all records
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}