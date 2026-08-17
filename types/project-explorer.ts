import type { ProjectStatus } from "./projects";

export type ProjectCategory =
  | "Roads"
  | "Bridges"
  | "Drainage"
  | "Education"
  | "Healthcare"
  | "Electrification"
  | "Water"
  | "Youth Empowerment"
  | "Women Empowerment"
  | "Agriculture"
  | "Security"
  | "Community Development"
  | "Social Intervention"
  | "Sports"
  | "ICT"
  | "Scholarships";

export interface ExplorerProject {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  lga: string;
  community: string;
  year: number;
  status: ProjectStatus;
  image: string;
  description: string;
}