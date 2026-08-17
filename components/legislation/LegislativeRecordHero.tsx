import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  FileText,
  Landmark,
  Users,
} from "lucide-react";

import type { LegislativeRecord } from "@/data/legislation";

import Container from "../ui/Container";
import RecordStatusBadge from "./RecordStatusBadge";

interface LegislativeRecordHeroProps {
  record: LegislativeRecord;
}

export default function LegislativeRecordHero({
  record,
}: LegislativeRecordHeroProps) {
  const displayTitle =
    record.shortTitle ?? record.title;

  const primarySponsor =
    record.sponsors?.[0];

  return (
    <section className="relative overflow-hidden bg-green-950 py-14 text-white sm:py-16 lg:py-20">
      {/* Decorative background */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-green-600/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-[20%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          {/* Back link */}

          <Link
            href="/legislative-work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-50/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Legislative Work
          </Link>

          <div className="mt-8 max-w-5xl">
            {/* Status */}

            <RecordStatusBadge
              type={record.type}
              status={record.status}
            />

            {/* Bill number / session */}

            <div className="mt-5 flex flex-wrap gap-2">
              {record.billNumber && (
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-extrabold text-amber-300">
                  {record.billNumber}
                </span>
              )}

              {record.legislativeSession && (
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-green-50">
                  {record.legislativeSession}
                </span>
              )}

              {record.category && (
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-green-50">
                  {record.category}
                </span>
              )}
            </div>

            {/* Title */}

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {displayTitle}
            </h1>

            {/* Full title when short title is used */}

            {record.shortTitle &&
              record.shortTitle !== record.title && (
                <p className="mt-4 max-w-4xl text-sm font-semibold leading-7 text-green-50/60">
                  {record.title}
                </p>
              )}

            {/* Summary */}

            <p className="mt-6 max-w-4xl text-base leading-8 text-green-50/75 sm:text-lg">
              {record.summary}
            </p>

            {/* Metadata */}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm text-green-50/75">
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={18}
                  className="text-amber-300"
                />
                {record.year}
              </div>

              <div className="flex items-center gap-2">
                <Landmark
                  size={18}
                  className="text-amber-300"
                />
                National Assembly
              </div>

              <div className="flex items-center gap-2">
                <FileText
                  size={18}
                  className="text-amber-300"
                />
                {record.type}
              </div>

              {primarySponsor && (
                <div className="flex items-center gap-2">
                  <Users
                    size={18}
                    className="text-amber-300"
                  />
                  {primarySponsor}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}