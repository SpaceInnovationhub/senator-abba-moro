export type ProjectStatus =
  | "Completed"
  | "Ongoing"
  | "2026 Budget"
  | "Planned"
  | "Recorded";

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

export type BenueSouthLga =
  | "Ado"
  | "Agatu"
  | "Apa"
  | "Obi"
  | "Ogbadibo"
  | "Ohimini"
  | "Oju"
  | "Okpokwu"
  | "Otukpo";

export interface ProjectMilestone {
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ProjectDocument {
  title: string;
  href: string;
  type: string;
}

export interface IntelligenceProject {
  id: number;

  slug: string;

  title: string;

  category: ProjectCategory;

  status: ProjectStatus;

  /*
   * A project can belong to one specific LGA
   * or be constituency-wide.
   */
  lga: BenueSouthLga | "Benue South";

  ward?: string;

  community: string;

  year: number;

  image: string;

  description: string;

  /*
   * Optional because some project records
   * do not yet have verified progress figures.
   */
  progress?: number;

  beneficiaries?: string;

  budget?: string;

  fundingSource?: string;

  contractor?: string;

  latitude?: number;

  longitude?: number;

  milestones?: ProjectMilestone[];

  documents?: ProjectDocument[];

  gallery?: string[];
}