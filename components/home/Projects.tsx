import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import Section from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        badge="Constituency Development"
        title="Featured Constituency Projects"
        description="Delivering sustainable infrastructure, education, healthcare and community development projects across Benue South Senatorial District."
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}