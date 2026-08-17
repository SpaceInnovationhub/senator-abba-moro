"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  FileText,
  Filter,
  Landmark,
  Search,
  Scale,
  ScrollText,
  X,
} from "lucide-react";

import {
  legislativeRecords,
  legislativeStatuses,
  legislativeTypes,
} from "@/data/legislation";

import Container from "../ui/Container";

const typeIcons = {
  Act: BadgeCheck,
  Bill: FileText,
  Motion: Scale,
  Proposal: Landmark,
};

export default function LegislativeExplorer() {
  const [query, setQuery] = useState("");

  const [type, setType] =
    useState<(typeof legislativeTypes)[number]>(
      "All Types"
    );

  const [status, setStatus] =
    useState<(typeof legislativeStatuses)[number]>(
      "All Statuses"
    );

  const [session, setSession] =
    useState("All Sessions");

  /* ======================================================
     DERIVE AVAILABLE LEGISLATIVE SESSIONS
  ====================================================== */

  const legislativeSessions = useMemo(() => {
    const sessions = new Set(
      legislativeRecords
        .map((record) => record.legislativeSession)
        .filter(
          (
            value
          ): value is string =>
            Boolean(value)
        )
    );

    return [
      "All Sessions",
      ...Array.from(sessions),
    ];
  }, []);

  /* ======================================================
     FILTER RECORDS
  ====================================================== */

  const filteredRecords = useMemo(() => {
    const normalized = query
      .trim()
      .toLowerCase();

    return legislativeRecords.filter(
      (record) => {
        const searchableSponsors =
          record.sponsors
            ?.join(" ")
            .toLowerCase() ?? "";

        const matchesQuery =
          !normalized ||
          record.title
            .toLowerCase()
            .includes(normalized) ||
          record.shortTitle
            ?.toLowerCase()
            .includes(normalized) ||
          record.summary
            .toLowerCase()
            .includes(normalized) ||
          record.category
            ?.toLowerCase()
            .includes(normalized) ||
          record.status
            .toLowerCase()
            .includes(normalized) ||
          record.billNumber
            ?.toLowerCase()
            .includes(normalized) ||
          record.legislativeSession
            ?.toLowerCase()
            .includes(normalized) ||
          record.stage
            ?.toLowerCase()
            .includes(normalized) ||
          searchableSponsors.includes(
            normalized
          );

        const matchesType =
          type === "All Types" ||
          record.type === type;

        const matchesStatus =
          status === "All Statuses" ||
          record.status === status;

        const matchesSession =
          session === "All Sessions" ||
          record.legislativeSession === session;

        return (
          matchesQuery &&
          matchesType &&
          matchesStatus &&
          matchesSession
        );
      }
    );
  }, [
    query,
    type,
    status,
    session,
  ]);

  /* ======================================================
     TYPE COUNTS
  ====================================================== */

  const acts = legislativeRecords.filter(
    (record) =>
      record.type === "Act"
  ).length;

  const bills = legislativeRecords.filter(
    (record) =>
      record.type === "Bill"
  ).length;

  const motions = legislativeRecords.filter(
    (record) =>
      record.type === "Motion"
  ).length;

  const proposals =
    legislativeRecords.filter(
      (record) =>
        record.type === "Proposal"
    ).length;

  const quickTypes = [
    {
      title: "Acts",
      value: acts,
      type: "Act",
      icon: BadgeCheck,
    },
    {
      title: "Bills",
      value: bills,
      type: "Bill",
      icon: FileText,
    },
    {
      title: "Motions",
      value: motions,
      type: "Motion",
      icon: Scale,
    },
    {
      title: "Proposals",
      value: proposals,
      type: "Proposal",
      icon: Landmark,
    },
  ] as const;

  const filtersActive =
    query !== "" ||
    type !== "All Types" ||
    status !== "All Statuses" ||
    session !== "All Sessions";

  function resetFilters() {
    setQuery("");
    setType("All Types");
    setStatus("All Statuses");
    setSession("All Sessions");
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            <ScrollText size={17} />
            Legislative Register
          </div>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Explore legislative records
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Search Acts, Bills, Motions and Proposals by
            title, bill number, legislative status, policy
            area or Senate session.
          </p>
        </div>

        {/* ==================================================
            QUICK TYPE NAVIGATION
        ================================================== */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickTypes.map((item) => {
            const Icon = item.icon;

            const active =
              type === item.type;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() =>
                  setType(
                    active
                      ? "All Types"
                      : item.type
                  )
                }
                className={`rounded-[20px] border p-5 text-left transition ${
                  active
                    ? "border-green-300 bg-green-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-green-200 hover:bg-green-50/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      active
                        ? "bg-green-700 text-white"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <p className="text-3xl font-extrabold text-green-950">
                    {item.value}
                  </p>
                </div>

                <p className="mt-4 font-extrabold text-slate-950">
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            SEARCH & FILTERS
        ================================================== */}

        <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          {/* Search */}

          <div className="relative">
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(
                  event.target.value
                )
              }
              placeholder="Search title, SB number, policy area, sponsor or status..."
              className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
            />
          </div>

          {/* Filters */}

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {/* Type */}

            <select
              value={type}
              onChange={(event) =>
                setType(
                  event.target
                    .value as (typeof legislativeTypes)[number]
                )
              }
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none focus:border-green-700"
            >
              {legislativeTypes.map(
                (option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                )
              )}
            </select>

            {/* Status */}

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target
                    .value as (typeof legislativeStatuses)[number]
                )
              }
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none focus:border-green-700"
            >
              {legislativeStatuses.map(
                (option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                )
              )}
            </select>

            {/* Session */}

            <select
              value={session}
              onChange={(event) =>
                setSession(
                  event.target.value
                )
              }
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none focus:border-green-700"
            >
              {legislativeSessions.map(
                (option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Filter status */}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Filter
                size={16}
                className="text-green-700"
              />

              <span>
                <strong className="text-slate-950">
                  {filteredRecords.length}
                </strong>{" "}
                {filteredRecords.length === 1
                  ? "record"
                  : "records"}{" "}
                found
              </span>
            </div>

            {filtersActive && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
              >
                <X size={16} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* ==================================================
            RECORDS
        ================================================== */}

        {filteredRecords.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredRecords.map(
              (record) => {
                const Icon =
                  typeIcons[record.type];

                return (
                  <article
                    key={record.id}
                    className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Header */}

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon
                          size={20}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        {record.year}
                      </span>
                    </div>

                    {/* Tags */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700">
                        {record.type}
                      </span>

                      {record.billNumber && (
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-extrabold text-amber-700">
                          {record.billNumber}
                        </span>
                      )}

                      {record.category && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700">
                          {record.category}
                        </span>
                      )}
                    </div>

                    {/* Title */}

                    <h3 className="mt-4 text-xl font-extrabold leading-7 text-slate-950">
                      {record.shortTitle ??
                        record.title}
                    </h3>

                    {/* Status */}

                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-amber-700">
                      {record.status}
                    </p>

                    {/* Legislative session */}

                    {record.legislativeSession && (
                      <p className="mt-2 text-xs font-semibold text-slate-500">
                        {record.legislativeSession}
                      </p>
                    )}

                    {/* Summary */}

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {record.summary}
                    </p>

                    {/* Link */}

                    <Link
                      href={`/legislative-work/${record.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                    >
                      View legislative record
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              }
            )}
          </div>
        ) : (
          <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <ScrollText
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-xl font-extrabold text-slate-900">
              No legislative records found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another bill number, title,
              policy area or clear the filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-green-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
            >
              Reset filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}