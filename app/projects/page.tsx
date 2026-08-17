import ProjectExplorer from "@/components/home/ProjectExplorer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsStats from "@/components/projects/ProjectsStats";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

export default function ProjectsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <ProjectsHero />
        <ProjectsStats />
        <ProjectExplorer />
      </main>

      <Footer />
    </>
  );
}