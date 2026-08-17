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
        <ProjectExplorer />
        
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