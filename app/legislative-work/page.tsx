import LegislativeExplorer from "@/components/legislation/LegislativeExplorer";
import LegislativeStats from "@/components/legislation/LegislativeStats";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import Container from "@/components/ui/Container";

export default function LegislativeWorkPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-green-600/25 blur-3xl" />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                Legislative Intelligence Platform
              </p>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Track legislative work and institutional impact
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/75 sm:text-lg">
                Explore laws, bills, proposals and legislative interventions associated with the representation of Benue South Senatorial District.
              </p>
            </div>
          </Container>
        </section>

        <LegislativeStats />

        <LegislativeExplorer />
      </main>

      <Footer />
    </>
  );
}