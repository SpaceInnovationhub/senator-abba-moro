import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  PersonStanding,
  Sprout,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export interface EmpowermentHighlight {
  id: number;
  title: string;
  category: string;
  description: string;
  interventions: string[];
  href: string;
  icon: LucideIcon;
  accent: "green" | "amber" | "blue";
}

export const empowermentHighlights: EmpowermentHighlight[] = [
  {
    id: 1,
    title: "Youth Empowerment",
    category: "Young People",
    description:
      "Programmes designed to build employable skills, support enterprise development and improve economic participation among young people.",
    interventions: [
      "ICT training and laptop distribution",
      "Agricultural start-up grants",
      "Motorcycle, mini-bus and mobility support",
      "Block-making kits and technical equipment",
      "Sports and skills acquisition centres",
    ],
    href: "/empowerment/youth",
    icon: UsersRound,
    accent: "green",
  },
  {
    id: 2,
    title: "Women Empowerment",
    category: "Women-focused Support",
    description:
      "Economic and vocational interventions supporting women-led businesses, household enterprises and community livelihoods.",
    interventions: [
      "Sewing and grinding machines",
      "Refrigerators and generating sets",
      "Enterprise grants and business starter packs",
      "Salon kits and vocational equipment",
      "Business development and skills training",
    ],
    href: "/empowerment/women",
    icon: PersonStanding,
    accent: "amber",
  },
  {
    id: 3,
    title: "Scholarships & Education Support",
    category: "Human Capital",
    description:
      "Educational assistance for students and young professionals through scholarships, training and institutional development.",
    interventions: [
      "Foreign scholarships for indigent students",
      "ICT and digital skills training",
      "Entrepreneurship development",
      "Agricultural value-chain training",
      "Customer service capacity building",
    ],
    href: "/empowerment/scholarships",
    icon: GraduationCap,
    accent: "blue",
  },
  {
    id: 4,
    title: "ICT & Technical Skills",
    category: "Digital Inclusion",
    description:
      "Practical digital, vocational and technical programmes designed to improve employability and enterprise readiness.",
    interventions: [
      "ICT skills acquisition",
      "Laptop distribution",
      "Technical and vocational training",
      "Block-making equipment",
      "Skills acquisition centre development",
    ],
    href: "/empowerment/skills",
    icon: Laptop,
    accent: "green",
  },
  {
    id: 5,
    title: "Agriculture & Farmers Support",
    category: "Agricultural Development",
    description:
      "Inputs, equipment, training and enterprise assistance supporting farmers and agricultural value chains across Benue South.",
    interventions: [
      "Fertilizer and herbicide distribution",
      "Agricultural tricycles and equipment",
      "Livestock distribution",
      "Agricultural grants",
      "Value-chain and agribusiness training",
    ],
    href: "/development/agriculture",
    icon: Sprout,
    accent: "amber",
  },
  {
    id: 6,
    title: "Enterprise & Mobility Support",
    category: "Economic Opportunity",
    description:
      "Business tools, transport assets and start-up resources enabling beneficiaries to establish and expand productive enterprises.",
    interventions: [
      "Mini buses and motorcycles",
      "Cars and mobility assistance",
      "Business starter packs",
      "Generating sets and refrigerators",
      "Enterprise grants and equipment",
    ],
    href: "/empowerment/grants",
    icon: BriefcaseBusiness,
    accent: "blue",
  },
];