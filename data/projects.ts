import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Construction of Classroom Blocks",
    category: "Education",
    lga: "Otukpo",
    image: "/images/projects/project1.jpg",
    status: "Completed",
    description:
      "Construction of six-classroom blocks to improve access to quality education across selected communities.",
  },

  {
    id: 2,
    title: "Solar Street Lighting",
    category: "Infrastructure",
    lga: "Ohimini",
    image: "/images/projects/project2.jpg",
    status: "Completed",
    description:
      "Installation of solar-powered street lights to improve security and economic activities within communities.",
  },

  {
    id: 3,
    title: "Otukpo–Odujaje Road Rehabilitation",
    category: "Road Infrastructure",
    lga: "Otukpo",
    image: "/images/projects/project3.jpg",
    status: "Ongoing",
    description:
      "Rehabilitation and expansion of strategic road infrastructure to improve transportation and commerce.",
  },
];