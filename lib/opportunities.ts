import { explorerProjects } from "@/data/projectExplorer";

export function getYouthEmpowermentProjects() {
  return explorerProjects.filter(
    (project) =>
      project.category === "Youth Empowerment"
  );
}

export function getWomenEmpowermentProjects() {
  return explorerProjects.filter(
    (project) =>
      project.category === "Women Empowerment"
  );
}

export function getScholarshipProjects() {
  return explorerProjects.filter(
    (project) =>
      project.category === "Scholarships"
  );
}

export function getAgricultureSupportProjects() {
  return explorerProjects.filter(
    (project) =>
      project.category === "Agriculture"
  );
}

export function getIctProjects() {
  return explorerProjects.filter(
    (project) =>
      project.category === "ICT"
  );
}

export function getEmpowermentProjects() {
  return explorerProjects.filter(
    (project) =>
      project.category === "Youth Empowerment" ||
      project.category === "Women Empowerment" ||
      project.category === "Agriculture" ||
      project.category === "ICT"
  );
}

export function getOpportunitySummary() {
  const youth = getYouthEmpowermentProjects();
  const women = getWomenEmpowermentProjects();
  const scholarships = getScholarshipProjects();
  const agriculture = getAgricultureSupportProjects();
  const ict = getIctProjects();

  return {
    total:
      youth.length +
      women.length +
      scholarships.length +
      agriculture.length +
      ict.length,

    youth: youth.length,
    women: women.length,
    scholarships: scholarships.length,
    agriculture: agriculture.length,
    ict: ict.length,
  };
}