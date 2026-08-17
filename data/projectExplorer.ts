import type {
  IntelligenceProject,
  ProjectCategory,
  ProjectStatus,
} from "@/types/projects";

export const projectCategories: Array<
  "All Categories" | ProjectCategory
> = [
  "All Categories",
  "Roads",
  "Bridges",
  "Drainage",
  "Education",
  "Healthcare",
  "Electrification",
  "Water",
  "Youth Empowerment",
  "Women Empowerment",
  "Agriculture",
  "Security",
  "Community Development",
  "Social Intervention",
  "Sports",
  "ICT",
  "Scholarships",
];

export const projectStatuses: Array<
  "All Statuses" | ProjectStatus
> = [
  "All Statuses",
  "Completed",
  "Ongoing",
  "2026 Budget",
  "Planned",
  "Recorded",
];

export const projectLgas = [
  "All LGAs",
  "Benue South",
  "Ado",
  "Agatu",
  "Apa",
  "Obi",
  "Ogbadibo",
  "Ohimini",
  "Oju",
  "Okpokwu",
  "Otukpo",
] as const;

export const projectYears = [
  "All Years",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
] as const;

export const explorerProjects: IntelligenceProject[] = [
  /* ======================================================
     FLAGSHIP INFRASTRUCTURE
  ====================================================== */

  {
    id: 1,
    slug: "otukpo-obi-oju-federal-road",
    title: "Otukpo–Obi–Oju Federal Road",
    category: "Roads",
    status: "Ongoing",
    lga: "Otukpo",
    community: "Otukpo–Obi–Oju Corridor",
    year: 2026,
    image: "/images/projects/otukpo-obi-oju-road.jpg",
    description:
      "Flagship federal road intervention connecting the Otukpo, Obi and Oju axis of Benue South.",
    fundingSource: "Federal Government",
  },

  {
    id: 2,
    slug: "igaluwa-road",
    title: "Igaluwa Road",
    category: "Roads",
    status: "Recorded",
    lga: "Otukpo",
    community: "Igaluwa",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road infrastructure intervention recorded within the Benue South constituency project portfolio.",
  },

  {
    id: 3,
    slug: "ojira-road",
    title: "Ojira Road",
    category: "Roads",
    status: "Recorded",
    lga: "Otukpo",
    community: "Ojira",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road development intervention recorded within the constituency infrastructure portfolio.",
  },

  {
    id: 4,
    slug: "ameh-ebute-road",
    title: "Ameh Ebute Road",
    category: "Roads",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Ameh Ebute",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Community road intervention recorded among road construction and rehabilitation projects.",
  },

  {
    id: 5,
    slug: "oshigbudu-ogbaulu-road",
    title: "Oshigbudu–Ogbaulu Road",
    category: "Roads",
    status: "Recorded",
    lga: "Agatu",
    community: "Oshigbudu–Ogbaulu",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road intervention connecting communities within the Agatu axis.",
  },

  {
    id: 6,
    slug: "olengbecho-ojapo-ogege-road",
    title: "Olengbecho–Ojapo–Ogege Road",
    category: "Roads",
    status: "2026 Budget",
    lga: "Okpokwu",
    community: "Olengbecho–Ojapo–Ogege",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road project captured among infrastructure interventions in the 2026 Federal Budget.",
  },

  {
    id: 7,
    slug: "aikpla-ondo-ihilikpa-road",
    title: "Aikpla–Ondo–Ihilikpa Road",
    category: "Roads",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Aikpla–Ondo–Ihilikpa",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road development intervention serving communities along the Aikpla–Ondo–Ihilikpa corridor.",
  },

  {
    id: 8,
    slug: "ugbokolo-internal-roads",
    title: "Internal Roads in Ugbokolo",
    category: "Roads",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Ugbokolo",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Internal road development and rehabilitation intervention within Ugbokolo.",
  },

  {
    id: 9,
    slug: "eke-ugbokolo-road",
    title: "Eke–Ugbokolo Road",
    category: "Roads",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Eke–Ugbokolo",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road infrastructure connecting Eke and Ugbokolo communities.",
  },

  {
    id: 10,
    slug: "utonkon-ekile-road",
    title: "Utonkon–Ekile Road",
    category: "Roads",
    status: "Recorded",
    lga: "Ado",
    community: "Utonkon–Ekile",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road intervention serving communities along the Utonkon–Ekile axis.",
  },

  {
    id: 11,
    slug: "ukwo-owukpa-itabono-road",
    title: "Ukwo–Owukpa–Itabono Road",
    category: "Roads",
    status: "Recorded",
    lga: "Ogbadibo",
    community: "Ukwo–Owukpa–Itabono",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road development intervention serving the Owukpa axis of Ogbadibo LGA.",
  },

  {
    id: 12,
    slug: "ihilikpa-onyangede-road",
    title: "Ihilikpa–Onyangede Road",
    category: "Roads",
    status: "Recorded",
    lga: "Ohimini",
    community: "Ihilikpa–Onyangede",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road intervention connecting communities within Ohimini Local Government Area.",
  },

  {
    id: 13,
    slug: "obagaji-okokolo-road",
    title: "Obagaji–Okokolo Road",
    category: "Roads",
    status: "Recorded",
    lga: "Agatu",
    community: "Obagaji–Okokolo",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road infrastructure intervention within Agatu Local Government Area.",
  },

  {
    id: 14,
    slug: "adoka-roundabout-rehabilitation",
    title: "Adoka Roundabout Rehabilitation",
    category: "Roads",
    status: "Recorded",
    lga: "Otukpo",
    community: "Adoka",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Rehabilitation intervention at Adoka Roundabout.",
  },

  /* ======================================================
     BRIDGES
  ====================================================== */

  {
    id: 20,
    slug: "odaburu-bridge",
    title: "Odaburu Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Otukpo",
    community: "Odaburu",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge infrastructure intervention recorded within the Benue South project portfolio.",
  },

  {
    id: 21,
    slug: "river-ogbadibo-bridge",
    title: "River Ogbadibo Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Ogbadibo",
    community: "Ogbadibo",
    year: 2026,
    image: "/images/projects/river-ogbadibo-bridge.jpg",
    description:
      "Bridge intervention improving connectivity across the River Ogbadibo corridor.",
  },

  {
    id: 22,
    slug: "ohimini-river-bridge",
    title: "Ohimini River Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Ohimini",
    community: "Ohimini",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge intervention associated with improved access and community connectivity.",
  },

  {
    id: 23,
    slug: "ado-bridge-rehabilitation",
    title: "Ado Bridge Rehabilitation",
    category: "Bridges",
    status: "Recorded",
    lga: "Ado",
    community: "Ado",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge rehabilitation intervention within Ado Local Government Area.",
  },

  /* ======================================================
     DRAINAGE
  ====================================================== */

  {
    id: 30,
    slug: "obu-branch-drainage-system",
    title: "Obu Branch Drainage System",
    category: "Drainage",
    status: "Recorded",
    lga: "Otukpo",
    community: "Obu Branch",
    year: 2026,
    image: "/images/projects/drainage-project.jpg",
    description:
      "Drainage intervention designed to improve storm-water management and protect surrounding infrastructure.",
  },

  {
    id: 31,
    slug: "ugbokolo-drainage-erosion-control",
    title: "Ugbokolo Drainage and Erosion Control",
    category: "Drainage",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Ugbokolo",
    year: 2026,
    image: "/images/projects/ugbokolo-drainage.jpg",
    description:
      "Drainage and erosion-control intervention aimed at reducing flooding and protecting infrastructure within Ugbokolo.",
  },

  /* ======================================================
     HEALTHCARE
  ====================================================== */

  {
    id: 40,
    slug: "okwungaga-primary-healthcare-centre",
    title: "Okwungaga Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Okwungaga",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare construction or reconstruction intervention recorded for Okwungaga.",
  },

  {
    id: 41,
    slug: "awume-primary-healthcare-centre",
    title: "Awume Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Ohimini",
    community: "Awume",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare infrastructure intervention serving Awume and surrounding communities.",
  },

  {
    id: 42,
    slug: "apa-agila-primary-healthcare-centre",
    title: "Apa-Agila Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Ado",
    community: "Apa-Agila",
    year: 2026,
    image: "/images/projects/apa-agila-phc.jpg",
    description:
      "Primary healthcare construction or reconstruction intervention serving Apa-Agila.",
  },

  {
    id: 43,
    slug: "ogbaulu-primary-healthcare-centre",
    title: "Ogbaulu Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Agatu",
    community: "Ogbaulu",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare infrastructure intervention serving Ogbaulu.",
  },

  {
    id: 44,
    slug: "telehealth-kiosks",
    title: "Tele-health Kiosks",
    category: "Healthcare",
    status: "Recorded",
    lga: "Otukpo",
    community: "Multiple Communities",
    year: 2026,
    image: "/images/projects/telehealth.jpg",
    description:
      "Tele-health infrastructure intervention intended to improve access to remote healthcare services.",
  },

  /* ======================================================
     EDUCATION
  ====================================================== */

  {
    id: 50,
    slug: "ojantelle-classroom-blocks",
    title: "Classroom Blocks at Ojantelle",
    category: "Education",
    status: "Recorded",
    lga: "Apa",
    community: "Ojantelle",
    year: 2026,
    image: "/images/projects/classroom-blocks.jpg",
    description:
      "Construction of classroom infrastructure to support access to education.",
  },

  {
    id: 51,
    slug: "otukpa-classroom-blocks",
    title: "Classroom Blocks at Otukpa",
    category: "Education",
    status: "Recorded",
    lga: "Ogbadibo",
    community: "Otukpa",
    year: 2026,
    image: "/images/projects/classroom-blocks.jpg",
    description:
      "Classroom infrastructure intervention within Otukpa.",
  },

  {
    id: 52,
    slug: "oshigbudu-classroom-blocks",
    title: "Classroom Blocks at Oshigbudu",
    category: "Education",
    status: "Recorded",
    lga: "Agatu",
    community: "Oshigbudu",
    year: 2026,
    image: "/images/projects/classroom-blocks.jpg",
    description:
      "Classroom construction intervention supporting educational access in Oshigbudu.",
  },

  {
    id: 53,
    slug: "noun-lecture-hall",
    title: "NOUN Lecture Hall",
    category: "Education",
    status: "Recorded",
    lga: "Otukpo",
    community: "Otukpo",
    year: 2026,
    image: "/images/projects/lecture-hall.jpg",
    description:
      "Lecture hall infrastructure intervention supporting higher education.",
  },

  {
    id: 54,
    slug: "federal-college-lecture-theatre",
    title: "Federal College Lecture Theatre",
    category: "Education",
    status: "2026 Budget",
    lga: "Oju",
    community: "Ojapo-Opialu",
    year: 2026,
    image: "/images/projects/lecture-theatre.jpg",
    description:
      "Lecture theatre project captured among education interventions in the 2026 Federal Budget.",
  },

  /* ======================================================
     WATER
  ====================================================== */

  {
    id: 60,
    slug: "upu-water-treatment-plant",
    title: "Upu Water Treatment Plant",
    category: "Water",
    status: "Recorded",
    lga: "Otukpo",
    community: "Upu",
    year: 2026,
    image: "/images/projects/upu-water-treatment.jpg",
    description:
      "Water treatment infrastructure intervention serving Upu and surrounding communities.",
  },

  {
    id: 61,
    slug: "pci-water-works-rehabilitation",
    title: "Rehabilitation of PCI Water Works",
    category: "Water",
    status: "Recorded",
    lga: "Otukpo",
    community: "Otukpo",
    year: 2026,
    image: "/images/projects/water-project.jpg",
    description:
      "Rehabilitation of existing water infrastructure within the constituency.",
  },

  {
    id: 62,
    slug: "adoka-dam-reconstruction",
    title: "Adoka Dam Reconstruction",
    category: "Water",
    status: "Recorded",
    lga: "Otukpo",
    community: "Adoka",
    year: 2026,
    image: "/images/projects/water-project.jpg",
    description:
      "Dam reconstruction intervention intended to strengthen local water infrastructure.",
  },

  /* ======================================================
     ELECTRIFICATION
  ====================================================== */

  {
    id: 70,
    slug: "33kv-dual-carriage-extension",
    title: "33KV Dual Carriage Extension",
    category: "Electrification",
    status: "Recorded",
    lga: "Otukpo",
    community: "Benue South",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Electricity infrastructure extension recorded within the Benue South rural electrification portfolio.",
  },

  {
    id: 71,
    slug: "benue-south-transformer-distribution",
    title: "Transformer Distribution Programme",
    category: "Electrification",
    status: "Recorded",
    lga: "Otukpo",
    community: "Multiple Communities",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Distribution of transformers to support electricity access across constituency communities.",
  },

  {
    id: 72,
    slug: "benue-south-solar-street-lighting",
    title: "Solar Street Lighting Programme",
    category: "Electrification",
    status: "Recorded",
    lga: "Ohimini",
    community: "Multiple Communities",
    year: 2026,
    image: "/images/projects/solar-street-lighting.jpg",
    description:
      "Solar-powered street-lighting interventions across selected communities.",
  },

  /* ======================================================
     SECURITY
  ====================================================== */

  {
    id: 80,
    slug: "otukpo-police-command-renovation",
    title: "Otukpo Police Command Renovation",
    category: "Security",
    status: "Recorded",
    lga: "Otukpo",
    community: "Otukpo",
    year: 2026,
    image: "/images/projects/otukpo-police-command.jpg",
    description:
      "Renovation intervention supporting public safety and security service delivery.",
  },

  {
    id: 81,
    slug: "eke-military-camp",
    title: "Military Camp at Eke",
    category: "Security",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Eke",
    year: 2026,
    image: "/images/projects/security-project.jpg",
    description:
      "Security infrastructure intervention recorded at Eke.",
  },

  /* ======================================================
     YOUTH EMPOWERMENT
  ====================================================== */

  {
    id: 100,
    slug: "youth-ict-training-programme",
    title: "Youth ICT Training Programme",
    category: "ICT",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/ict-training.jpg",
    description:
      "ICT capacity development intervention designed to strengthen digital skills and improve opportunities for young people across Benue South.",
    beneficiaries: "Youth across Benue South",
  },

  {
    id: 101,
    slug: "youth-laptop-distribution",
    title: "Laptop Distribution for Youth Empowerment",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/laptop-distribution.jpg",
    description:
      "Distribution of laptops as part of youth-focused digital empowerment and skills development interventions.",
    beneficiaries: "Youth beneficiaries across Benue South",
  },

  {
    id: 102,
    slug: "agricultural-startup-grants",
    title: "Agricultural Start-up Grants",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/agricultural-grants.jpg",
    description:
      "Agricultural start-up support intended to help beneficiaries establish and strengthen productive agricultural enterprises.",
    beneficiaries: "Youth and agricultural entrepreneurs",
  },

  {
    id: 103,
    slug: "youth-livestock-support",
    title: "Youth Livestock Support",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/livestock-support.jpg",
    description:
      "Livestock support intervention forming part of constituency youth empowerment and agricultural development programmes.",
    beneficiaries: "Youth beneficiaries across Benue South",
  },

  {
    id: 104,
    slug: "motorcycle-distribution",
    title: "Motorcycle Distribution",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/motorcycle-distribution.jpg",
    description:
      "Mobility empowerment intervention involving the distribution of motorcycles to constituency beneficiaries.",
    beneficiaries: "Selected constituency beneficiaries",
  },

  {
    id: 105,
    slug: "minibus-distribution",
    title: "Mini Bus Distribution",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/minibus-distribution.jpg",
    description:
      "Distribution of mini buses as a mobility and economic empowerment intervention.",
    beneficiaries: "Selected constituency beneficiaries",
  },

  {
    id: 106,
    slug: "vehicle-empowerment-programme",
    title: "Vehicle Empowerment Programme",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/vehicle-empowerment.jpg",
    description:
      "Vehicle distribution intervention intended to support mobility and economic activities among selected beneficiaries.",
    beneficiaries: "Selected constituency beneficiaries",
  },

  {
    id: 107,
    slug: "block-making-kits",
    title: "Block-making Kits Distribution",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/block-making.jpg",
    description:
      "Distribution of block-making equipment as part of technical skills and enterprise empowerment interventions.",
    beneficiaries: "Artisans and youth entrepreneurs",
  },

  {
    id: 108,
    slug: "agricultural-tricycles-youth",
    title: "Agricultural Tricycles for Youth Empowerment",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/agricultural-tricycles.jpg",
    description:
      "Agricultural mobility equipment distributed to support productive activities and movement of agricultural goods.",
    beneficiaries: "Farmers and youth beneficiaries",
  },

  {
    id: 109,
    slug: "apa-skill-acquisition-centre",
    title: "Apa Skill Acquisition Centre",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Apa",
    community: "Apa",
    year: 2026,
    image: "/images/projects/skill-acquisition-centre.jpg",
    description:
      "Skill acquisition infrastructure intended to provide vocational and enterprise development opportunities.",
    beneficiaries: "Residents and youth of Apa LGA",
  },

  {
    id: 110,
    slug: "okwungaga-skill-acquisition-centre",
    title: "Okwungaga Skill Acquisition Centre",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Okwungaga",
    year: 2026,
    image: "/images/projects/skill-acquisition-centre.jpg",
    description:
      "Skill acquisition centre intervention supporting vocational training and economic empowerment.",
    beneficiaries: "Okwungaga and surrounding communities",
  },

  /* ======================================================
     WOMEN EMPOWERMENT
  ====================================================== */

  {
    id: 120,
    slug: "women-sewing-machine-distribution",
    title: "Sewing Machines for Women",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/sewing-machines.jpg",
    description:
      "Distribution of sewing machines to support tailoring, vocational development and women-owned microenterprises.",
    beneficiaries: "Women beneficiaries across Benue South",
  },

  {
    id: 121,
    slug: "women-grinding-machine-distribution",
    title: "Grinding Machines for Women",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/grinding-machines.jpg",
    description:
      "Distribution of grinding machines to support income-generating activities and small businesses.",
    beneficiaries: "Women entrepreneurs across Benue South",
  },

  {
    id: 122,
    slug: "women-refrigerator-distribution",
    title: "Refrigerator Distribution for Women",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/refrigerators.jpg",
    description:
      "Distribution of refrigerators as productive assets for women-led businesses and enterprises.",
    beneficiaries: "Women entrepreneurs",
  },

  {
    id: 123,
    slug: "women-generator-distribution",
    title: "Generating Sets for Women Entrepreneurs",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/generators.jpg",
    description:
      "Generating sets distributed as enterprise support equipment for women beneficiaries.",
    beneficiaries: "Women entrepreneurs",
  },

  {
    id: 124,
    slug: "women-enterprise-grants",
    title: "Enterprise Grants for Women",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/women-grants.jpg",
    description:
      "Financial support intervention aimed at strengthening women-owned businesses and economic activities.",
    beneficiaries: "Women beneficiaries across Benue South",
  },

  {
    id: 125,
    slug: "women-salon-kits",
    title: "Salon Kits for Women Entrepreneurs",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/salon-kits.jpg",
    description:
      "Distribution of salon equipment to support vocational activities and women-led beauty enterprises.",
    beneficiaries: "Women entrepreneurs",
  },

  {
    id: 126,
    slug: "women-business-starter-packs",
    title: "Business Starter Packs for Women",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/business-starter-packs.jpg",
    description:
      "Enterprise starter packs provided to support women establishing or expanding small businesses.",
    beneficiaries: "Women-owned micro and small enterprises",
  },

  {
    id: 127,
    slug: "women-vocational-training",
    title: "Vocational Training for Women",
    category: "Women Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/vocational-training.jpg",
    description:
      "Vocational and skills acquisition programme supporting women's economic participation and enterprise development.",
    beneficiaries: "Women across Benue South",
  },

  /* ======================================================
     AGRICULTURE & FARMERS SUPPORT
  ====================================================== */

  {
    id: 140,
    slug: "fertilizer-distribution-farmers",
    title: "Fertilizer Distribution to Farmers",
    category: "Agriculture",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/fertilizer-distribution.jpg",
    description:
      "Distribution of fertilizer to support agricultural production among farmers across the constituency.",
    beneficiaries: "Farmers across Benue South",
  },

  {
    id: 141,
    slug: "agricultural-tricycle-distribution",
    title: "Agricultural Tricycle Distribution",
    category: "Agriculture",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/agricultural-tricycles.jpg",
    description:
      "Distribution of agricultural tricycles to improve farm logistics and movement of agricultural produce.",
    beneficiaries: "Farmers and agricultural entrepreneurs",
  },

  {
    id: 142,
    slug: "livestock-distribution-farmers",
    title: "Livestock Distribution Programme",
    category: "Agriculture",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/livestock-support.jpg",
    description:
      "Livestock support intervention aimed at strengthening household and commercial agricultural production.",
    beneficiaries: "Farmers and livestock producers",
  },

  {
    id: 143,
    slug: "agricultural-grants-farmers",
    title: "Agricultural Grants",
    category: "Agriculture",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/agricultural-grants.jpg",
    description:
      "Financial support intervention for farmers and agricultural enterprises within Benue South.",
    beneficiaries: "Farmers and agricultural entrepreneurs",
  },

  {
    id: 144,
    slug: "agricultural-value-chain-training",
    title: "Agricultural Value Chain Training",
    category: "Agriculture",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/agriculture-training.jpg",
    description:
      "Training intervention focused on strengthening agricultural production, enterprise development and value-chain participation.",
    beneficiaries: "Farmers and agricultural entrepreneurs",
  },

  {
    id: 145,
    slug: "herbicide-distribution",
    title: "Herbicide Distribution",
    category: "Agriculture",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/farm-inputs.jpg",
    description:
      "Distribution of agricultural inputs including herbicides to support farming activities.",
    beneficiaries: "Farmers across Benue South",
  },

  /* ======================================================
     SCHOLARSHIPS & HUMAN CAPITAL
  ====================================================== */

  {
    id: 160,
    slug: "foreign-scholarships-indigent-students",
    title: "Foreign Scholarships for Indigent Students",
    category: "Scholarships",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/scholarships.jpg",
    description:
      "Foreign scholarship intervention providing educational opportunities for indigent students from the constituency.",
    beneficiaries: "Indigent students from Benue South",
  },

  {
    id: 161,
    slug: "entrepreneurship-development-training",
    title: "Entrepreneurship Development Training",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/entrepreneurship-training.jpg",
    description:
      "Enterprise development training intended to strengthen business skills and self-employment opportunities.",
    beneficiaries: "Entrepreneurs and young people across Benue South",
  },

  {
    id: 162,
    slug: "customer-service-capacity-training",
    title: "Customer Service Capacity Building",
    category: "Youth Empowerment",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/capacity-building.jpg",
    description:
      "Capacity-building programme covering customer service and workplace development skills.",
    beneficiaries: "Selected programme participants",
  },

  /* ======================================================
     SPORTS DEVELOPMENT
  ====================================================== */

  {
    id: 170,
    slug: "sports-complex-development",
    title: "Sports Complex Construction",
    category: "Sports",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/sports-complex.jpg",
    description:
      "Sports infrastructure intervention supporting recreation, youth engagement and talent development.",
    beneficiaries: "Young people and communities across Benue South",
  },

  /* ======================================================
     COMMUNITY DEVELOPMENT
  ====================================================== */

  {
    id: 180,
    slug: "community-halls-development",
    title: "Community Halls Development",
    category: "Community Development",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/community-hall.jpg",
    description:
      "Community hall infrastructure interventions supporting meetings, social activities and community development.",
    beneficiaries: "Beneficiary communities",
  },

  {
    id: 181,
    slug: "church-hall-project",
    title: "Church Hall Project",
    category: "Community Development",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/community-hall.jpg",
    description:
      "Hall infrastructure intervention recorded within the constituency community development portfolio.",
    beneficiaries: "Beneficiary community",
  },

  {
    id: 182,
    slug: "multipurpose-hall-project",
    title: "Multipurpose Hall",
    category: "Community Development",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/multipurpose-hall.jpg",
    description:
      "Multipurpose community infrastructure designed to support public and community activities.",
    beneficiaries: "Beneficiary communities",
  },

  {
    id: 183,
    slug: "otukpo-airstrip-arrival-departure-hall",
    title: "Otukpo Airstrip Arrival and Departure Hall",
    category: "Community Development",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/otukpo-airstrip.jpg",
    description:
      "Arrival and departure hall intervention for the Otukpo Airstrip captured among the 2026 budget facilitation projects.",
    beneficiaries: "Benue South and users of the Otukpo Airstrip",
  },

  // ======================================================
  // SOCIAL INTERVENTION
  // ======================================================

  {
    id: 190,
    slug: "rice-distribution-programme",
    title: "Rice Distribution Programme",
    category: "Social Intervention",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/rice-distribution.jpg",
    description:
      "Food support intervention involving the distribution of rice to constituency beneficiaries.",
    beneficiaries: "Selected households and constituency beneficiaries",
  },

  {
    id: 191,
    slug: "constituency-relief-support",
    title: "Constituency Relief Support",
    category: "Social Intervention",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/relief-support.jpg",
    description:
      "Relief intervention providing assistance to communities and beneficiaries requiring constituency support.",
    beneficiaries: "Affected and vulnerable constituency beneficiaries",
  },

  {
    id: 192,
    slug: "community-assistance-programmes",
    title: "Community Assistance Programmes",
    category: "Social Intervention",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/community-assistance.jpg",
    description:
      "Community assistance interventions forming part of constituency social support activities.",
    beneficiaries: "Communities across Benue South",
  },

  /* ======================================================
     ROADS — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 200,
    slug: "hospital-odiapa-road",
    title: "Hospital–Odiapa Road",
    category: "Roads",
    status: "Recorded",
    lga: "Otukpo",
    community: "Hospital–Odiapa Axis",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road infrastructure intervention recorded along the Hospital–Odiapa corridor.",
  },

  {
    id: 201,
    slug: "angwa-otakpa-road",
    title: "Angwa–Otakpa Road",
    category: "Roads",
    status: "Recorded",
    lga: "Ogbadibo",
    community: "Angwa–Otakpa",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road development intervention serving communities along the Angwa–Otakpa axis.",
  },

  {
    id: 202,
    slug: "entekpa-road",
    title: "Entekpa Road",
    category: "Roads",
    status: "Recorded",
    lga: "Oju",
    community: "Entekpa",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road infrastructure intervention recorded within the Benue South constituency project portfolio.",
  },

  {
    id: 203,
    slug: "aikpla-ihilikpa-onyangede-road",
    title: "Aikpla–Ihilikpa–Onyangede Road",
    category: "Roads",
    status: "2026 Budget",
    lga: "Ohimini",
    community: "Aikpla–Ihilikpa–Onyangede",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road intervention captured among the 2026 Federal Budget facilitation projects.",
  },

  {
    id: 204,
    slug: "otukpo-obi-road-2026-budget",
    title: "Otukpo–Obi Road",
    category: "Roads",
    status: "2026 Budget",
    lga: "Otukpo",
    community: "Otukpo–Obi Corridor",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road project captured in the 2026 Federal Budget as part of infrastructure facilitation for Benue South.",
  },

  {
    id: 205,
    slug: "obi-oju-road-2026-budget",
    title: "Obi–Oju Road",
    category: "Roads",
    status: "2026 Budget",
    lga: "Obi",
    community: "Obi–Oju Corridor",
    year: 2026,
    image: "/images/projects/road-project.jpg",
    description:
      "Road project captured among the 2026 Federal Budget infrastructure interventions.",
  },

  /* ======================================================
     BRIDGES — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 210,
    slug: "ikpochi-okpudu-bridge",
    title: "Ikpochi–Okpudu Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Okpokwu",
    community: "Ikpochi–Okpudu",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge infrastructure intervention improving connectivity between Ikpochi and Okpudu.",
  },

  {
    id: 211,
    slug: "oru-bridge",
    title: "Oru Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Oju",
    community: "Oru",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge intervention recorded within the constituency infrastructure development portfolio.",
  },

  {
    id: 212,
    slug: "ohimini-akpali-bridge",
    title: "Ohimini–Akpali Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Ohimini",
    community: "Ohimini–Akpali",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge infrastructure intervention serving the Ohimini–Akpali axis.",
  },

  {
    id: 213,
    slug: "otaklaja-akpali-bridge",
    title: "Otaklaja–Akpali Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Ohimini",
    community: "Otaklaja–Akpali",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge intervention supporting improved movement and community access along the Otaklaja–Akpali corridor.",
  },

  {
    id: 214,
    slug: "umabe-akpali-bridge",
    title: "Umabe–Akpali Bridge",
    category: "Bridges",
    status: "Recorded",
    lga: "Ohimini",
    community: "Umabe–Akpali",
    year: 2026,
    image: "/images/projects/bridge-project.jpg",
    description:
      "Bridge infrastructure intervention recorded between Umabe and Akpali communities.",
  },

  /* ======================================================
     HEALTHCARE — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 230,
    slug: "otunche-primary-healthcare-centre",
    title: "Otunche Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Ogbadibo",
    community: "Otunche",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare construction or reconstruction intervention recorded for Otunche.",
  },

  {
    id: 231,
    slug: "udegi-ito-primary-healthcare-centre",
    title: "Udegi-Ito Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Obi",
    community: "Udegi-Ito",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare infrastructure intervention serving Udegi-Ito and surrounding communities.",
  },

  {
    id: 232,
    slug: "ankpali-primary-healthcare-centre",
    title: "Ankpali Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Ohimini",
    community: "Ankpali",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare intervention recorded for Ankpali.",
  },

  {
    id: 233,
    slug: "ogodumu-primary-healthcare-centre",
    title: "Ogodumu Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Agatu",
    community: "Ogodumu",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare infrastructure intervention serving Ogodumu.",
  },

  {
    id: 234,
    slug: "ugboju-primary-healthcare-centre",
    title: "Ugboju Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Otukpo",
    community: "Ugboju",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare intervention recorded for Ugboju and surrounding communities.",
  },

  {
    id: 235,
    slug: "uhuhu-primary-healthcare-centre",
    title: "Uhuhu Primary Healthcare Centre",
    category: "Healthcare",
    status: "Recorded",
    lga: "Oju",
    community: "Uhuhu",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare construction or reconstruction intervention serving Uhuhu.",
  },

  {
    id: 236,
    slug: "medical-equipment-distribution",
    title: "Medical Equipment Distribution",
    category: "Healthcare",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/medical-equipment.jpg",
    description:
      "Distribution of medical equipment to support healthcare service delivery across beneficiary facilities.",
  },

  {
    id: 237,
    slug: "drugs-distribution-programme",
    title: "Drugs Distribution Programme",
    category: "Healthcare",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/medical-outreach.jpg",
    description:
      "Distribution of medicines as part of constituency healthcare support interventions.",
  },

  {
    id: 238,
    slug: "mini-ambulance-support",
    title: "Mini Ambulance Support",
    category: "Healthcare",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/ambulance.jpg",
    description:
      "Mini ambulance support intervention aimed at improving emergency and patient mobility services.",
  },

  {
    id: 239,
    slug: "free-medical-outreach",
    title: "Free Medical Outreach",
    category: "Healthcare",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/medical-outreach.jpg",
    description:
      "Free medical outreach programme providing healthcare services to constituency beneficiaries.",
  },

  {
    id: 240,
    slug: "hospital-staff-training",
    title: "Hospital Staff Training",
    category: "Healthcare",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/health-training.jpg",
    description:
      "Capacity-building intervention for healthcare personnel and hospital staff.",
  },

  /* ======================================================
     RURAL ELECTRIFICATION — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 270,
    slug: "community-electrification-projects",
    title: "Community Electrification Projects",
    category: "Electrification",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Community-level electricity interventions recorded across Benue South to improve access to power for households, businesses and public institutions.",
    beneficiaries:
      "Communities across Benue South Senatorial District",
  },

  {
    id: 271,
    slug: "rural-line-extensions",
    title: "Rural Electricity Line Extensions",
    category: "Electrification",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Extension of electricity distribution lines to underserved and developing communities across the constituency.",
    beneficiaries:
      "Rural communities across Benue South",
  },

  {
    id: 272,
    slug: "mini-grid-development",
    title: "Mini Grid Development",
    category: "Electrification",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/mini-grid.jpg",
    description:
      "Mini-grid development interventions supporting decentralised electricity access in beneficiary communities.",
    beneficiaries:
      "Selected off-grid and underserved communities",
  },

  {
    id: 273,
    slug: "ollo-electrification-2026",
    title: "Ollo Electrification Project",
    category: "Electrification",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Ollo",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Electrification intervention listed among the constituency projects captured in the 2026 Federal Budget.",
  },

  {
    id: 274,
    slug: "ogbangede-electrification-2026",
    title: "Ogbangede Electrification Project",
    category: "Electrification",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Ogbangede",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Electrification project recorded among the 2026 Federal Budget facilitation interventions.",
  },

  {
    id: 275,
    slug: "odaubi-electrification-2026",
    title: "Odaubi Electrification Project",
    category: "Electrification",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Odaubi",
    year: 2026,
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Electricity access intervention captured among the 2026 budget facilitation projects.",
  },

  {
    id: 276,
    slug: "transformers-2026-budget",
    title: "Transformer Distribution — 2026 Budget",
    category: "Electrification",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/transformers.jpg",
    description:
      "Transformer procurement and distribution intervention captured among the constituency projects in the 2026 Federal Budget.",
    beneficiaries:
      "Beneficiary communities across Benue South",
  },

    /* ======================================================
     WATER SUPPLY — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 280,
    slug: "solar-borehole-programme",
    title: "Solar Borehole Programme",
    category: "Water",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/solar-borehole.jpg",
    description:
      "Solar-powered borehole interventions supporting access to potable water in beneficiary communities.",
    beneficiaries:
      "Communities across Benue South",
  },

  {
    id: 281,
    slug: "community-borehole-programme",
    title: "Community Borehole Projects",
    category: "Water",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/borehole.jpg",
    description:
      "Community borehole interventions providing improved water access to beneficiary settlements.",
    beneficiaries:
      "Selected communities across Benue South",
  },

  {
    id: 282,
    slug: "boreholes-2026-budget",
    title: "Borehole Projects — 2026 Budget",
    category: "Water",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/borehole.jpg",
    description:
      "Borehole development projects captured among water-sector interventions in the 2026 Federal Budget.",
    beneficiaries:
      "Beneficiary communities across Benue South",
  },

    /* ======================================================
     SECURITY & PUBLIC SAFETY
  ====================================================== */

  {
    id: 290,
    slug: "police-area-command-office",
    title: "Police Area Command Office",
    category: "Security",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/security-project.jpg",
    description:
      "Police infrastructure intervention intended to strengthen operational capacity and public safety within Benue South.",
    beneficiaries:
      "Security agencies and communities across Benue South",
  },

  {
    id: 291,
    slug: "security-vehicle-support",
    title: "Security Vehicle Support",
    category: "Security",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/security-vehicles.jpg",
    description:
      "Provision of mobility support to strengthen security operations and response capacity.",
    beneficiaries:
      "Security personnel and beneficiary communities",
  },

  {
    id: 292,
    slug: "security-legislative-interventions",
    title: "Legislative Interventions on Insecurity",
    category: "Security",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/security-project.jpg",
    description:
      "Legislative motions and interventions drawing attention to insecurity and advocating improved protection for affected communities.",
    beneficiaries:
      "Communities affected by insecurity",
  },

    /* ======================================================
     2026 BUDGET — HEALTHCARE
  ====================================================== */

  {
    id: 300,
    slug: "primary-healthcare-centres-2026-budget",
    title: "Primary Healthcare Centres — 2026 Budget",
    category: "Healthcare",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/primary-healthcare.jpg",
    description:
      "Primary healthcare centre interventions captured among constituency projects in the 2026 Federal Budget.",
    beneficiaries:
      "Beneficiary communities across Benue South",
  },

  {
    id: 301,
    slug: "hospital-equipment-2026-budget",
    title: "Hospital Equipment — 2026 Budget",
    category: "Healthcare",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/medical-equipment.jpg",
    description:
      "Hospital equipment intervention captured among healthcare facilitation projects in the 2026 Federal Budget.",
    beneficiaries:
      "Healthcare facilities and patients across Benue South",
  },

    /* ======================================================
     2026 BUDGET — EMPOWERMENT
  ====================================================== */

  {
    id: 310,
    slug: "women-youth-skills-acquisition-2026",
    title: "Women and Youth Skills Acquisition — 2026 Budget",
    category: "Youth Empowerment",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/skills-training.jpg",
    description:
      "Skills acquisition intervention for women and youth captured among constituency empowerment projects in the 2026 Federal Budget.",
    beneficiaries:
      "Women and youth across Benue South",
  },

    /* ======================================================
     COMMUNITY DEVELOPMENT — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 320,
    slug: "community-hall-development-programme",
    title: "Community Hall Development Programme",
    category: "Community Development",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/community-hall.jpg",
    description:
      "Community hall infrastructure interventions supporting meetings, civic engagement, social activities and local development.",
    beneficiaries:
      "Beneficiary communities across Benue South",
  },

  {
    id: 321,
    slug: "multipurpose-community-hall",
    title: "Multipurpose Community Hall",
    category: "Community Development",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/multipurpose-hall.jpg",
    description:
      "Multipurpose hall infrastructure intervention supporting public, community and development activities.",
    beneficiaries:
      "Beneficiary communities",
  },

  {
    id: 322,
    slug: "public-institution-support-programme",
    title: "Public Institution Infrastructure Support",
    category: "Community Development",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/community-infrastructure.jpg",
    description:
      "Infrastructure support interventions for public institutions serving communities within Benue South.",
    beneficiaries:
      "Public institutions and constituency communities",
  },

    /* ======================================================
     SOCIAL INTERVENTION — ADDITIONAL RECORDS
  ====================================================== */

  {
    id: 330,
    slug: "constituency-relief-intervention",
    title: "Constituency Relief Intervention",
    category: "Social Intervention",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/relief-support.jpg",
    description:
      "Relief support intervention providing assistance to vulnerable households and affected communities within the constituency.",
    beneficiaries:
      "Selected households and affected communities",
  },

  {
    id: 331,
    slug: "community-assistance-support",
    title: "Community Assistance Support",
    category: "Social Intervention",
    status: "Recorded",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/community-assistance.jpg",
    description:
      "Community assistance interventions supporting constituency residents and groups requiring targeted support.",
    beneficiaries:
      "Constituency residents and beneficiary groups",
  },

    /* ======================================================
     2026 FEDERAL BUDGET — ADDITIONAL FACILITATION RECORDS
  ====================================================== */

  {
    id: 340,
    slug: "federal-college-lecture-theatre-2026",
    title: "Federal College Lecture Theatre — 2026 Budget",
    category: "Education",
    status: "2026 Budget",
    lga: "Oju",
    community: "Ojapo-Opialu",
    year: 2026,
    image: "/images/projects/lecture-theatre.jpg",
    description:
      "Lecture theatre intervention captured among education projects in the 2026 Federal Budget.",
    beneficiaries:
      "Students, academic staff and the host institution",
  },

  {
    id: 341,
    slug: "mini-grid-projects-2026",
    title: "Mini Grid Projects — 2026 Budget",
    category: "Electrification",
    status: "2026 Budget",
    lga: "Benue South",
    community: "Constituency-wide",
    year: 2026,
    image: "/images/projects/mini-grid.jpg",
    description:
      "Mini-grid electricity interventions captured among the constituency projects facilitated in the 2026 Federal Budget.",
    beneficiaries:
      "Selected underserved communities",
  },

  {
    id: 342,
    slug: "otukpo-airstrip-terminal-hall-2026",
    title: "Otukpo Airstrip Arrival and Departure Hall",
    category: "Community Development",
    status: "2026 Budget",
    lga: "Otukpo",
    community: "Otukpo",
    year: 2026,
    image: "/images/projects/otukpo-airstrip.jpg",
    description:
      "Arrival and departure hall project for the Otukpo Airstrip captured among the 2026 Federal Budget facilitation interventions.",
    beneficiaries:
      "Benue South residents and airstrip users",
  },
]
export function getProjectBySlug(slug: string) {
  return explorerProjects.find(
    (project) => project.slug === slug
  );
}
export function getDuplicateProjectSlugs() {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const project of explorerProjects) {
    if (seen.has(project.slug)) {
      duplicates.add(project.slug);
    }

    seen.add(project.slug);
  }

  return Array.from(duplicates);
}
