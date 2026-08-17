import {
  Building2,
  MapPin,
} from "lucide-react";

import type { LgaRecord } from "@/types/constituency-intelligence";

import Container from "../ui/Container";

interface LgaOverviewProps {
  lga: LgaRecord;
}

export default function LgaOverview({
  lga,
}: LgaOverviewProps) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
              LGA Overview
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
              About {lga.name}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {lga.description}
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                className="mt-0.5 text-green-700"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Headquarters
                </p>

                <p className="mt-1 font-extrabold text-slate-900">
                  {lga.headquarters}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Building2
                size={20}
                className="mt-0.5 text-green-700"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Senatorial District
                </p>

                <p className="mt-1 font-extrabold text-slate-900">
                  Benue South
                </p>
              </div>
            </div>

            {lga.population && (
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Population
                </p>

                <p className="mt-1 font-extrabold text-slate-900">
                  {lga.population}
                </p>
              </div>
            )}

            {lga.wards && (
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Political Wards
                </p>

                <p className="mt-1 font-extrabold text-slate-900">
                  {lga.wards}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}