import {
  BadgeCheck,
  FileCheck2,
  FileText,
  Landmark,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

import { legislativeRecords } from "@/data/legislation";

import Container from "../ui/Container";

export default function LegislativeStats() {
  const assented = legislativeRecords.filter(
    (record) =>
      record.status === "Presidential Assent"
  ).length;

  const billsInProgress = legislativeRecords.filter(
    (record) =>
      record.type === "Bill" &&
      record.status === "In Progress"
  ).length;

  const proposals = legislativeRecords.filter(
    (record) =>
      record.type === "Proposal"
  ).length;

  const sourcedRecords = legislativeRecords.filter(
    (record) =>
      record.verificationStatus ===
      "Official Source Attached"
  ).length;

  const verifiedSourcePending =
    legislativeRecords.filter(
      (record) =>
        record.verificationStatus ===
        "Verified - Source Pending"
    ).length;

  const awaitingVerification =
    legislativeRecords.filter(
      (record) =>
        record.verificationStatus ===
        "Awaiting Verification"
    ).length;

  const verificationRate =
    legislativeRecords.length > 0
      ? Math.round(
          (sourcedRecords / legislativeRecords.length) * 100
        )
      : 0;

  const stats = [
    {
      title: "Legislative Records",
      value: legislativeRecords.length,
      description:
        "Acts, bills, motions and proposals currently available in the legislative register.",
      icon: ScrollText,
    },
    {
      title: "Presidential Assent",
      value: assented,
      description:
        "Legislation recorded as having received presidential assent.",
      icon: BadgeCheck,
    },
    {
      title: "Bills in Progress",
      value: billsInProgress,
      description:
        "Bills currently recorded as progressing through the legislative process.",
      icon: FileText,
    },
    {
      title: "Official Sources",
      value: sourcedRecords,
      description:
        "Legislative records currently linked to an official source document.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 pb-8">
      <Container>
        {/* ==================================================
            PRIMARY STATISTICS
        ================================================== */}

        <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="border-b border-slate-200 p-6 sm:border-r xl:border-b-0 xl:last:border-r-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon
                    size={23}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-5 text-3xl font-extrabold text-green-950">
                  {stat.value}
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {stat.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            VERIFICATION SUMMARY
        ================================================== */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_220px]">
          {/* Verification information */}

          <div className="rounded-[24px] border border-green-200 bg-green-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <FileCheck2
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <p className="font-extrabold text-green-950">
                  Legislative Verification Summary
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  <strong className="text-green-800">
                    {sourcedRecords}
                  </strong>{" "}
                  of{" "}
                  <strong>
                    {legislativeRecords.length}
                  </strong>{" "}
                  legislative records currently include an
                  official source reference.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  <strong className="text-green-800">
                    {sourcedRecords}
                  </strong>{" "}
                  records currently have official source references attached,{" "}
                  <strong className="text-blue-700">
                    {verifiedSourcePending}
                  </strong>{" "}
                  are verified but awaiting source attachment, and{" "}
                  <strong className="text-amber-700">
                    {awaitingVerification}
                  </strong>{" "}
                  remain pending further verification.
                </p>

                {/* Progress bar */}

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-4 text-xs font-bold">
                    <span className="text-slate-600">
                      Source coverage
                    </span>

                    <span className="text-green-800">
                      {verificationRate}%
                    </span>
                  </div>

                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-green-700 transition-all duration-500"
                      style={{
                        width: `${verificationRate}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proposal count */}

          <div className="flex items-center rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Landmark
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 text-3xl font-extrabold text-green-950">
                {proposals}
              </p>

              <p className="font-bold text-slate-900">
                Proposals
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Constitutional and institutional proposals
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}