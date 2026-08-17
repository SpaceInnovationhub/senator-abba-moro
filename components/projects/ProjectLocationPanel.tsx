"use client";

import Link from "next/link";

import {
  ExternalLink,
  MapPin,
  Navigation,
} from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

interface ProjectLocationPanelProps {
  project: IntelligenceProject;
}

export default function ProjectLocationPanel({
  project,
}: ProjectLocationPanelProps) {
  const hasCoordinates =
    typeof project.latitude === "number" &&
    typeof project.longitude === "number";

  const mapUrl = hasCoordinates
    ? `https://www.google.com/maps/search/?api=1&query=${project.latitude},${project.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${project.community}, ${project.lga} LGA, Benue State`
      )}`;

  return (
    <section className="mt-12">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
            Geographic Location
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
            Project location
          </h2>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-green-700 px-5 text-sm font-bold text-green-700 transition hover:bg-green-50"
        >
          Open in Google Maps
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="mt-7 overflow-hidden rounded-[26px] border border-slate-200 bg-green-50">
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,101,52,0.18),transparent_65%)]" />

          <div className="relative z-10 max-w-md px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-white shadow-xl">
              <MapPin size={30} />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-green-950">
              {project.community}
            </h3>

            <p className="mt-2 text-base font-semibold text-green-800">
              {project.lga} Local Government Area
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Benue South Senatorial District, Benue State
            </p>

            {hasCoordinates && (
              <p className="mt-4 text-xs text-slate-500">
                Coordinates: {project.latitude}, {project.longitude}
              </p>
            )}
          </div>
        </div>

        <div className="grid border-t border-green-100 bg-white sm:grid-cols-2">
          <div className="flex items-start gap-3 border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
            <Navigation
              size={20}
              className="mt-0.5 shrink-0 text-green-700"
            />

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                LGA
              </p>

              <p className="mt-1 font-extrabold text-slate-900">
                {project.lga}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-5">
            <MapPin
              size={20}
              className="mt-0.5 shrink-0 text-green-700"
            />

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Community
              </p>

              <p className="mt-1 font-extrabold text-slate-900">
                {project.community}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/constituency/${project.lga.toLowerCase()}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
      >
        Explore projects in {project.lga} LGA
      </Link>
    </section>
  );
}