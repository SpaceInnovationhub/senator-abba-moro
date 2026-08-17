import Link from "next/link";

import {
  ArrowLeft,
  Building2,
  MapPin,
} from "lucide-react";

import type { LgaRecord } from "@/types/constituency-intelligence";

import Container from "../ui/Container";

interface LgaHeroProps {
  lga: LgaRecord;
  totalProjects: number;
}

export default function LgaHero({
  lga,
  totalProjects,
}: LgaHeroProps) {
  return (
    <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-green-600/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-[18%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <Link
            href="/constituency"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-50/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Benue South
          </Link>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <MapPin size={17} />
                Benue South Senatorial District
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                {lga.name} Local Government Area
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore constituency projects, development interventions and
                public information for {lga.name} Local Government Area.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-green-950">
                  <Building2 size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-50/65">
                    Headquarters
                  </p>

                  <p className="mt-1 text-xl font-extrabold">
                    {lga.headquarters}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-50/65">
                  Registered Projects
                </p>

                <p className="mt-1 text-3xl font-extrabold text-amber-300">
                  {totalProjects}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}