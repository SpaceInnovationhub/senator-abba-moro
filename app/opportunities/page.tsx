import OpportunityCategories from "@/components/opportunities/OpportunityCategories";
import OpportunityHero from "@/components/opportunities/OpportunityHero";
import OpportunityStats from "@/components/opportunities/OpportunityStats";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

export default function OpportunitiesPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <OpportunityHero />
        <OpportunityStats />
        <OpportunityCategories />
      </main>

      <Footer />
    </>
  );
}