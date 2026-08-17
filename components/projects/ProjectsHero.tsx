import Link from "next/link";

import {
  ArrowRight,
  Building2,
  MapPinned,
} from "lucide-react";

import Container from "../ui/Container";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-green-600/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-[20%] h-[380px] w-[380px] rounded-full bg-amber-300/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
              <Building2 size={17} />
              Projects Intelligence Platform
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Track constituency development across Benue South
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
              Search projects, review implementation status, explore
              development by Local Government Area and follow measurable
              constituency impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#project-register"
                className="inline-flex h-14 items-center gap-2 rounded-xl bg-amber-400 px-7 font-bold text-green-950 transition hover:bg-amber-300"
              >
                Explore Project Register
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/constituency/map"
                className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 font-bold text-white transition hover:bg-white/10"
              >
                <MapPinned size={19} />
                View Map
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-7 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
              Platform Capabilities
            </p>

            <div className="mt-6 space-y-5">
              {[
                "Search projects by name or community",
                "Filter by category, status, LGA and year",
                "Monitor project implementation progress",
                "Explore beneficiary communities",
                "Access project documents and updates",
              ].map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 font-extrabold text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="font-semibold text-white">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}