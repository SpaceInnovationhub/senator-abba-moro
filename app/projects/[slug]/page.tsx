import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import RelatedProjects from "@/components/projects/RelatedProjects";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import {
  explorerProjects,
  getProjectBySlug,
} from "@/data/projectExplorer";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return explorerProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Senator Abba Moro`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <ProjectDetailHero project={project} />
        <ProjectDetailContent project={project} />
        <RelatedProjects project={project} />
      </main>

      <Footer />
    </>
  );
}