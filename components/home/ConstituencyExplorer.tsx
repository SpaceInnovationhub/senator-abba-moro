"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";

import { lgas } from "@/data/lgas";

import PageSection from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";

export default function ConstituencyExplorer() {
  const [selectedLga, setSelectedLga] = useState(lgas[0]);

  return (
    <PageSection className="bg-slate-50">
      <SectionHeader
        badge="Benue South District"
        title="Explore the Constituency"
        description="Discover constituency development activities across the nine Local Government Areas that make up Benue South Senatorial District."
        align="center"
      />

      <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.72fr_1.28fr]">
        {/* LGA selector */}
        <div className="border-b border-slate-200 bg-white p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Local Government Areas
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select an LGA to view constituency information and project
              activity.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {lgas.map((lga) => {
              const active = selectedLga.id === lga.id;

              return (
                <button
                  key={lga.id}
                  type="button"
                  onClick={() => setSelectedLga(lga)}
                  className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                    active
                      ? "bg-green-700 text-white shadow-md"
                      : "bg-slate-50 text-slate-800 hover:bg-green-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-white text-green-700 shadow-sm"
                      }`}
                    >
                      <MapPin size={18} />
                    </div>

                    <div>
                      <p className="font-bold">
                        {lga.name}
                      </p>

                      <p
                        className={`text-xs ${
                          active
                            ? "text-green-100"
                            : "text-slate-500"
                        }`}
                      >
                        Local Government Area
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-sm font-semibold ${
                      active
                        ? "text-amber-300"
                        : "text-green-700"
                    }`}
                  >
                    {lga.projects}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* LGA detail panel */}
        <div className="relative overflow-hidden bg-green-950 px-7 py-10 text-white sm:px-10 sm:py-12">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-300">
                Selected LGA
              </span>

              <span className="text-sm font-medium text-green-100/70">
                Benue South Senatorial District
              </span>
            </div>

            <h3 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {selectedLga.name}
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
              {selectedLga.description}
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <MapPin
                  size={22}
                  className="text-amber-300"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-100/60">
                  Headquarters
                </p>

                <p className="mt-1 text-lg font-bold">
                  {selectedLga.headquarters}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <Building2
                  size={22}
                  className="text-amber-300"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-100/60">
                  Projects
                </p>

                <p className="mt-1 text-lg font-bold">
                  {selectedLga.projects}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <Users
                  size={22}
                  className="text-amber-300"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-100/60">
                  Constituency
                </p>

                <p className="mt-1 text-lg font-bold">
                  Benue South
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <Landmark
                  size={22}
                  className="text-amber-300"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-100/60">
                  Representation
                </p>

                <p className="mt-1 text-lg font-bold">
                  Senate
                </p>
              </div>
            </div>

            <a
              href={`/constituency/${selectedLga.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-green-950 transition hover:bg-amber-300"
            >
              View {selectedLga.name} Projects
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
}