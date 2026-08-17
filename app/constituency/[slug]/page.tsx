import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowRight,
  Info,
  MapPinned,
} from "lucide-react";

import LgaDevelopmentCategories from "@/components/constituency/LgaDevelopmentCategories";
import LgaHero from "@/components/constituency/LgaHero";
import LgaOverview from "@/components/constituency/LgaOverview";
import LgaProjects from "@/components/constituency/LgaProjects";
import LgaStatistics from "@/components/constituency/LgaStatistics";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

import { constituencyLgas } from "@/data/intelligence";

import {
  getConstituencyWideProjects,
  getLgaBySlug,
  getLgaProjectStats,
  getProjectsByLgaSlug,
} from "@/lib/intelligence";

interface LgaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ======================================================
   STATIC ROUTES
====================================================== */

export function generateStaticParams() {
  return constituencyLgas.map((lga) => ({
    slug: lga.slug,
  }));
}

/* ======================================================
   PAGE METADATA
====================================================== */

export async function generateMetadata({
  params,
}: LgaPageProps): Promise<Metadata> {
  const { slug } = await params;

  const lga = getLgaBySlug(slug);

  if (!lga) {
    return {
      title: "LGA Not Found",
    };
  }

  return {
    title: `${lga.name} LGA | Senator Abba Moro Constituency Portal`,
    description: `Explore constituency projects, development sectors and recorded interventions across ${lga.name} Local Government Area in Benue South Senatorial District.`,
  };
}

/* ======================================================
   LGA PAGE
====================================================== */

export default async function LgaPage({
  params,
}: LgaPageProps) {
  const { slug } = await params;

  const lga = getLgaBySlug(slug);

  if (!lga) {
    notFound();
  }

  /* ====================================================
     LGA-SPECIFIC INTELLIGENCE

     These projects are assigned directly to this LGA.
     Constituency-wide projects are deliberately excluded
     from the LGA statistics.
  ==================================================== */

  const projects = getProjectsByLgaSlug(slug);

  const stats = getLgaProjectStats(slug);

  /* ====================================================
     CONSTITUENCY-WIDE PROGRAMMES

     These records are displayed separately and are not
     included in this LGA's project totals.
  ==================================================== */

  const constituencyWide =
    getConstituencyWideProjects();

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* ==================================================
            LGA HERO
        ================================================== */}

        <LgaHero
          lga={lga}
          totalProjects={projects.length}
        />

        {/* ==================================================
            LGA STATISTICS
        ================================================== */}

        <LgaStatistics stats={stats} />

        {/* ==================================================
            LGA OVERVIEW
        ================================================== */}

        <LgaOverview lga={lga} />

        {/* ==================================================
            DEVELOPMENT CATEGORIES
        ================================================== */}

        <LgaDevelopmentCategories
          lgaName={lga.name}
          stats={stats}
        />

        {/* ==================================================
            LGA PROJECT REGISTER
        ================================================== */}

        <LgaProjects
          lgaName={lga.name}
          projects={projects}
        />

        {/* ==================================================
            CONSTITUENCY-WIDE PROGRAMMES
        ================================================== */}

        {constituencyWide.length > 0 && (
          <section className="bg-slate-50 pb-16 sm:pb-20 lg:pb-24">
            <Container>
              <div className="overflow-hidden rounded-[28px] border border-green-200 bg-white shadow-sm">
                <div className="grid lg:grid-cols-[1fr_auto]">
                  {/* Information */}

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Info
                          size={22}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                          Benue South-Wide Programmes
                        </p>

                        <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                          Constituency-wide interventions
                        </h2>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                          In addition to projects specifically recorded for{" "}
                          <strong className="font-bold text-slate-900">
                            {lga.name} LGA
                          </strong>
                          , the constituency register currently contains{" "}
                          <strong className="font-extrabold text-green-800">
                            {constituencyWide.length}
                          </strong>{" "}
                          {constituencyWide.length === 1
                            ? "intervention"
                            : "interventions"}{" "}
                          recorded at the wider Benue South level.
                        </p>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                          These programmes are displayed separately because
                          the available project records do not assign them
                          exclusively to {lga.name}. They are therefore not
                          included in the project totals shown above.
                        </p>

                        <Link
                          href="/projects?lga=Benue%20South"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
                        >
                          Explore constituency-wide interventions
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Count */}

                  <div className="flex min-w-[210px] items-center border-t border-green-100 bg-green-50 p-6 lg:border-l lg:border-t-0 lg:p-8">
                    <div>
                      <MapPinned
                        size={25}
                        className="text-green-700"
                        aria-hidden="true"
                      />

                      <p className="mt-4 text-4xl font-extrabold text-green-950">
                        {constituencyWide.length}
                      </p>

                      <p className="mt-1 font-bold text-slate-900">
                        District-wide
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Recorded separately from {lga.name} LGA totals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}