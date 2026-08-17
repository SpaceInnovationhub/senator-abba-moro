export interface NavLink {
  name: string;
  href: string;
}

export type StatisticIcon =
  | "Building2"
  | "Users"
  | "GraduationCap"
  | "Briefcase"
  | "HeartHandshake"
  | "Hospital"
  | "Route"
  | "ScrollText"
  | "Scale"
  | "Zap"
  | "MapPinned";

export interface Statistic {
  title: string;
  value: string;
  icon: StatisticIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  lga: string;
  image: string;
  status: "Completed" | "Ongoing";
  description: string;
}

export interface News {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  featured: boolean;
}

export interface Achievement {
  title: string;
  value: string;
}

export interface Opportunity {
  id: number;
  title: string;
  category: string;
  description: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  role: string;
  quote: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface ConstituencyLocation {
  id: number;
  name: string;
  headquarters: string;
  projects: number;
  beneficiaries: string;
  description: string;
}