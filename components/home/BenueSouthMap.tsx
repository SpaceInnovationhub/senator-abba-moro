"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Building2,
  MapPin,
} from "lucide-react";

interface Lga {
  name: string;
  slug: string;
  projects: number;
  headquarters: string;
}

const lgas: Lga[] = [
  {
    name: "Ado",
    slug: "ado",
    projects: 14,
    headquarters: "Igumale",
  },
  {
    name: "Agatu",
    slug: "agatu",
    projects: 12,
    headquarters: "Obagaji",
  },
  {
    name: "Apa",
    slug: "apa",
    projects: 10,
    headquarters: "Ugbokpo",
  },
  {
    name: "Obi",
    slug: "obi",
    projects: 15,
    headquarters: "Obarike-Ito",
  },
  {
    name: "Ogbadibo",
    slug: "ogbadibo",
    projects: 11,
    headquarters: "Otukpa",
  },
  {
    name: "Ohimini",
    slug: "ohimini",
    projects: 13,
    headquarters: "Idekpa",
  },
  {
    name: "Okpokwu",
    slug: "okpokwu",
    projects: 18,
    headquarters: "Okpoga",
  },
  {
    name: "Otukpo",
    slug: "otukpo",
    projects: 28,
    headquarters: "Otukpo",
  },
  {
    name: "Oju",
    slug: "oju",
    projects: 16,
    headquarters: "Oju",
  },
];

export default function BenueSouthMap() {
  const [selectedLga, setSelectedLga] = useState<Lga>(lgas[0]);

  return (
    <div className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
            Benue South Map
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Explore the nine Local Government Areas
          </p>
        </div>

        <MapPin
          size={20}
          className="shrink-0 text-green-700"
          aria-hidden="true"
        />
      </div>

      {/* Map */}
      <div className="relative mt-5 min-h-[300px] overflow-hidden rounded-2xl border border-green-100 bg-green-50 sm:min-h-[340px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,101,52,0.09),transparent_68%)]" />

        <Image
          src="/images/maps/benue-south-lgas.svg"
          alt="Map showing the nine Local Government Areas of Benue South Senatorial District"
          fill
          sizes="(max-width: 1280px) 100vw, 400px"
          className="object-contain p-3"
        />
      </div>

      {/* LGA selector */}
      <div className="mt-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
          Select an LGA
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {lgas.map((lga) => {
            const active = selectedLga.slug === lga.slug;

            return (
              <button
                key={lga.slug}
                type="button"
                onClick={() => setSelectedLga(lga)}
                aria-pressed={active}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition ${
                  active
                    ? "border-amber-400 bg-amber-400 text-green-950 shadow-sm"
                    : "border-green-100 bg-green-50 text-green-800 hover:border-green-300 hover:bg-green-100"
                }`}
              >
                {lga.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected LGA information */}
      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-green-700">
              Selected LGA
            </p>

            <h3 className="mt-1 text-lg font-extrabold text-slate-950">
              {selectedLga.name}
            </h3>
          </div>

          <Link
            href={`/constituency/${selectedLga.slug}`}
            className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold text-green-700 transition hover:gap-2"
          >
            View details
            <ArrowRight
              size={14}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin
                size={14}
                className="shrink-0 text-green-700"
                aria-hidden="true"
              />

              <span className="text-[11px]">
                Headquarters
              </span>
            </div>

            <p className="mt-1 text-sm font-bold text-slate-900">
              {selectedLga.headquarters}
            </p>
          </div>

          <div className="rounded-xl bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2 text-slate-500">
              <Building2
                size={14}
                className="shrink-0 text-green-700"
                aria-hidden="true"
              />

              <span className="text-[11px]">
                Projects
              </span>
            </div>

            <p className="mt-1 text-sm font-bold text-slate-900">
              {selectedLga.projects}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}