import ConstituencyExplorer from "@/components/home/ConstituencyExplorer";
import ContactBanner from "@/components/home/ContactBanner";
import Hero from "@/components/home/Hero";
import HomeDashboard from "@/components/home/HomeDashboard";
import LegislativeHighlights from "@/components/home/LegislativeHighlights";
import Newsletter from "@/components/home/Newsletter";
import Opportunities from "@/components/home/Opportunities";
import Partners from "@/components/home/Partners";
import QuickActions from "@/components/home/QuickActions";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import EmpowermentHighlights from "@/components/home/EmpowermentHighlights";
import ProjectExplorer from "@/components/home/ProjectExplorer";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <Statistics />

        {/* Compact target-style upper dashboard */}
        <HomeDashboard />
        <QuickActions />

        {/* Deeper homepage content */}
        <ConstituencyExplorer />
        <LegislativeHighlights />
        <EmpowermentHighlights />

        <Suspense
          fallback={
            <section className="bg-white py-16 sm:py-20 lg:py-24">
              <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="h-8 w-56 animate-pulse rounded-lg bg-slate-200" />

                  <div className="mt-4 h-12 max-w-2xl animate-pulse rounded-lg bg-slate-200" />

                  <div className="mt-8 h-[280px] animate-pulse rounded-[24px] bg-slate-200" />
                </div>
              </div>
            </section>
          }
        >
          <ProjectExplorer />
        </Suspense>
        
        <Opportunities />
        <Testimonials />
        <Partners />
        <Newsletter />
        <ContactBanner />
        
      </main>

      <Footer />
    </>
  );
}