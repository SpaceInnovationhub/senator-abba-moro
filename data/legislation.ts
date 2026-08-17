export type LegislativeType =
  | "Act"
  | "Bill"
  | "Motion"
  | "Proposal";

export type LegislativeStatus =
  | "Presidential Assent"
  | "Passed by Senate"
  | "In Progress"
  | "Sponsored"
  | "Proposed"
  | "Stepped Down";

export interface LegislativeMilestone {
  date: string;
  title: string;
  description: string;
}

export interface LegislativeDocument {
  title: string;
  type: string;
  href: string;
}
export type LegislativeVerificationStatus =
  | "Official Source Attached"
  | "Verified - Source Pending"
  | "Awaiting Verification";

export interface LegislativeRecord {
  id: number;
  slug: string;
  title: string;

  shortTitle?: string;
  href?: string;

  type: LegislativeType;
  status: LegislativeStatus;

  year: number;

  summary: string;

  impact?: string;
  stage?: string;
  category?: string;

  /* Legislative intelligence */
  billNumber?: string;
  legislativeSession?: string;

  dateIntroduced?: string;
  secondReadingDate?: string;
  passedDate?: string;

  committee?: string;
  committeeReportingPeriod?: string;

  sponsors?: string[];

  /* Extended content */
  background?: string;
  objectives?: string[];
  beneficiaries?: string[];

  milestones?: LegislativeMilestone[];
  documents?: LegislativeDocument[];

  sourceTitle?: string;
  sourceUrl?: string;
  sourceType?: string;

  verificationStatus?: LegislativeVerificationStatus;
  verificationNote?: string;
}

export const legislativeRecords: LegislativeRecord[] = [
  {
    id: 1,
    slug: "federal-university-health-sciences-otukpo-act",
    title:
      "Federal University of Health Sciences, Otukpo Establishment Act",
    type: "Act",
    status: "Presidential Assent",
    year: 2026,
    category: "Education",
    summary:
      "Legislation establishing the Federal University of Health Sciences in Otukpo.",
    impact:
      "Strengthens access to specialised health-sciences education and institutional development in Benue South.",
  },
  {
    id: 2,
    slug: "federal-college-agricultural-technology-ojapo-opialu-act",

    title:
      "Federal College of Agricultural Technology, Ojapo-Opialu Establishment Act",

    type: "Act",

    status: "Presidential Assent",

    year: 2026,

    category: "Agriculture",

    billNumber: "SB. 897",

  legislativeSession: "9th Senate",

  dateIntroduced: "22 July 2022",

  sponsors: [
    "Sen. Abba Moro",
  ],

  summary:
    "Legislation establishing the Federal College of Agricultural Technology in Ojapo-Opialu, Benue State.",

  background:
    "The establishment legislation originated as SB.897, Federal College of Agricultural Technology Opialu-Ojapo, Benue State (Establishment, etc.) Bill, 2022, sponsored by Senator Abba Moro.",

  impact:
    "Expands access to technical agricultural education and strengthens practical training opportunities in Benue South.",

  objectives: [
    "Establish the Federal College of Agricultural Technology at Opialu-Ojapo.",
    "Provide full-time agricultural technology education and training.",
    "Support research and solutions to agricultural technology challenges.",
  ],

  beneficiaries: [
    "Students and prospective students",
    "Farmers and agricultural entrepreneurs",
    "Agricultural researchers and institutions",
    "Communities within Benue South",
  ],

  milestones: [
    {
      date: "22 July 2022",
      title: "Bill Recorded",
      description:
        "SB.897 was recorded in the 9th Senate under the sponsorship of Senator Abba Moro.",
    },
  ],
  verificationStatus:
    "Official Source Attached",

  verificationNote:
    "Bill number, sponsor, date and 9th Parliament record verified against the National Assembly Bill Tracker.",

  sourceTitle:
    "Federal College of Agricultural Technology Opialu-Ojapo Bill — SB.897",

  sourceType:
    "Official National Assembly Bill Tracker",

  sourceUrl:
    "https://nass.gov.ng/documents/bill/11053",
},
{
  id: 3,
  slug: "north-central-development-commission-act",

  title:
    "North Central Development Commission Establishment Act",

  shortTitle:
    "North Central Development Commission Act",

  type: "Act",

  status: "Presidential Assent",

  year: 2026,

  category: "Regional Development",

  billNumber: "SB. 140",

  legislativeSession: "10th Senate",

  dateIntroduced: "5 October 2023",

  secondReadingDate: "21 February 2024",

  passedDate: "4 July 2024",

  committee: "Senate Committee on Special Duties",

  committeeReportingPeriod: "4 weeks",

  sponsors: [
    "Sen. Mohammed Sani Musa",
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "Passed by the Senate following committee consideration and subsequently recorded in the constituency legislative register as having received presidential assent.",

  summary:
    "Legislation establishing a development commission for the North Central geopolitical zone.",

  background:
    "The North Central Development Commission legislation was introduced to establish a statutory development institution for coordinated intervention across the North Central geopolitical zone.",

  impact:
    "Creates a statutory framework for coordinated development interventions across the North Central region.",

  objectives: [
    "Provide a statutory institutional framework for development interventions in North Central Nigeria.",
    "Support coordinated infrastructure and socioeconomic development across the region.",
    "Strengthen federal intervention in communities affected by development and security challenges.",
  ],

  beneficiaries: [
    "Communities across North Central Nigeria",
    "State and local development institutions",
    "Residents requiring coordinated regional development intervention",
  ],

  milestones: [
    {
      date: "5 October 2023",
      title: "Bill Introduced",
      description:
        "The North Central Development Commission (Establishment) Bill was introduced in the Senate.",
    },
    {
      date: "21 February 2024",
      title: "Second Reading",
      description:
        "The Bill progressed through second reading and was referred to the Senate Committee on Special Duties.",
    },
    {
      date: "4 July 2024",
      title: "Passed by Senate",
      description:
        "The Senate Bills Register records the Bill as passed.",
    },
  ],
  verificationStatus:
  "Official Source Attached",

  sourceTitle:
    "Senate Bills Register — North Central Development Commission (Establishment) Bill, 2023",

  sourceType:
    "Official National Assembly Senate Bills Register",

  sourceUrl:
    "https://nass.gov.ng/documents/billdownload/11133.pdf",
},
  {
  id: 4,

  slug:
    "federal-university-health-sciences-otukpo-teaching-hospital-bill",

  title:
    "University Teaching Hospitals (Reconstitution of Boards, Etc.) Act (Amendment) Bill, 2025",

  shortTitle:
    "Federal University of Health Sciences Otukpo Teaching Hospital Bill",

  type: "Bill",

  status: "In Progress",

  year: 2025,

  category: "Healthcare",

  legislativeSession: "10th Senate",

  dateIntroduced: "8 October 2025",

  secondReadingDate: "18 November 2025",

  committee:
    "Senate Committee on Health (Secondary & Tertiary)",

  sponsors: [
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "Passed second reading and referred to the Senate Committee on Health (Secondary & Tertiary). A public hearing was subsequently held in July 2026.",

  summary:
    "A bill to amend the University Teaching Hospitals legal framework to provide statutory recognition for the Federal University of Health Sciences Otukpo Teaching Hospital in Benue State.",

  background:
    "The bill seeks to amend the University Teaching Hospitals (Reconstitution of Boards, Etc.) Act to include the Federal University of Health Sciences Otukpo Teaching Hospital. The proposal is intended to provide the teaching hospital with the statutory foundation required for its operation as a university teaching hospital.",

  impact:
    "The proposed amendment would strengthen the statutory foundation of the Federal University of Health Sciences Otukpo Teaching Hospital and support specialist healthcare delivery, clinical education and the training of healthcare professionals.",

  objectives: [
    "Provide statutory recognition for the Federal University of Health Sciences Otukpo Teaching Hospital.",
    "Strengthen clinical training for students of the Federal University of Health Sciences, Otukpo.",
    "Support specialist healthcare delivery and medical education.",
    "Integrate the teaching hospital into the applicable federal teaching-hospital legal framework.",
  ],

  beneficiaries: [
    "Students of the Federal University of Health Sciences, Otukpo",
    "Medical and healthcare professionals",
    "Patients requiring specialist healthcare",
    "Residents of Benue South and surrounding communities",
  ],

  milestones: [
    {
      date: "8 October 2025",
      title: "First Reading",
      description:
        "The bill passed first reading in the Senate.",
    },
    {
      date: "18 November 2025",
      title: "Second Reading",
      description:
        "The Senate considered the general principles of the bill and passed it for second reading.",
    },
    {
      date: "18 November 2025",
      title: "Committee Referral",
      description:
        "The bill was referred to the Senate Committee on Health (Secondary & Tertiary) for further legislative consideration.",
    },
    {
      date: "July 2026",
      title: "Public Hearing",
      description:
        "The Senate held a public hearing on the proposed amendment.",
    },
  ],

    verificationStatus:
      "Verified - Source Pending",

    verificationNote:
      "The sponsor, purpose, first reading, second reading, committee referral and subsequent public hearing are supported by public reports. A precise official National Assembly bill-register entry should be attached when identified.",
  },
  {
    id: 5,
    slug: "federal-college-agriculture-technology-bill",
    title:
      "Federal College of Agriculture and Technology Bill",
    type: "Bill",
    status: "In Progress",
    year: 2026,
    category: "Agriculture",
    summary:
      "Legislative proposal focused on strengthening agricultural and technical education.",
    verificationStatus:
      "Awaiting Verification",
    verificationNote:
      "Public constituency record available, but exact official Senate bill number and procedural record have not yet been matched.",
  },
  {
    id: 6,

    slug:
      "federal-institute-science-technology-innovation-obusa-bill",

    title:
      "Federal Institute of Science, Technology and Innovation Obusa, Benue State (Establishment) Bill, 2025",

    shortTitle:
      "Federal Institute of Science, Technology and Innovation, Obusa",

    type: "Bill",

    status: "Sponsored",

    year: 2025,

    category: "Science & Technology",

    billNumber: "SB. 757",

    legislativeSession: "10th Senate",

    dateIntroduced: "26 March 2025",

    sponsors: [
      "Sen. Abba Patrick Moro",
    ],

    stage:
      "Recorded in the Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",

    summary:
      "A bill proposing the establishment of a Federal Institute of Science, Technology and Innovation at Obusa in Benue State.",

    background:
      "The official Senate Bills Register records SB.757 as a Federal Institute of Science, Technology and Innovation establishment bill sponsored by Senator Abba Patrick Moro.",

    impact:
      "The proposed institution is intended to expand access to science, technology and innovation education and institutional development.",

    objectives: [
      "Establish a federal science, technology and innovation institution at Obusa.",
      "Expand access to science and technology education.",
      "Strengthen research, innovation and technical capacity development.",
    ],

    beneficiaries: [
      "Students and young people in Benue South",
      "Researchers and technology professionals",
      "Science and innovation institutions",
    ],

    milestones: [
      {
        date: "26 March 2025",
        title: "Bill Introduced",
        description:
          "SB.757 was recorded in the official Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",
      },
    ],
    verificationStatus:
  "Official Source Attached",
    sourceTitle:
      "Senate Bills Register — Federal Institute of Science, Technology and Innovation Obusa Bill, 2025",

    sourceType:
      "Official National Assembly Senate Bills Register",

    sourceUrl:
      "https://nass.gov.ng/documents/billdownload/11207.pdf",
  },
  {
    id: 7,

    slug:
      "power-rotation-constitution-alteration-bill-2024",

    title:
      "Constitution of the Federal Republic of Nigeria 1999 (Alteration) Bill, 2024 — Rotation of Power",

    shortTitle:
      "Power Rotation Bill",

    type: "Bill",

    status: "Sponsored",

    year: 2024,

    category: "Governance & Constitutional Reform",

    legislativeSession: "10th Senate",

    dateIntroduced: "13 March 2024",

    sponsors: [
      "Sen. Abba Patrick Moro",
    ],

    stage:
      "Passed First Reading in the Senate on 13 March 2024.",

    summary:
      "A constitutional alteration proposal seeking a framework for rotation of political offices among geopolitical zones, senatorial districts and federal constituencies.",

    background:
      "The 2024 proposal followed Senator Abba Moro's earlier Power Rotation Bill introduced during the 9th Senate. The 2024 measure was presented as an alteration to the Constitution of the Federal Republic of Nigeria 1999.",

    impact:
      "The proposal seeks to institutionalise political inclusion and rotation of specified elective offices across relevant geopolitical and electoral constituencies.",

    objectives: [
      "Provide for rotation of the Presidency among Nigeria's six geopolitical zones.",
      "Provide for rotation of governorship among the senatorial districts of each state.",
      "Provide for rotation of senatorial representation among federal constituencies within a senatorial district.",
      "Promote political inclusion, participation and representation across different parts of the federation.",
    ],

    beneficiaries: [
      "Nigeria's geopolitical zones",
      "Senatorial districts",
      "Federal constituencies",
      "Citizens participating in Nigeria's democratic system",
    ],

    milestones: [
      {
        date: "13 March 2024",
        title: "First Reading",
        description:
          "The Constitution Alteration Bill on rotation of power passed first reading in the Senate.",
      },
    ],

    verificationStatus:
      "Verified - Source Pending",

    verificationNote:
      "The 2024 Power Rotation constitutional proposal and its first reading are independently corroborated. The precise Senate bill number should not be assigned until matched conclusively to the official bill register.",
  },
  {
    id: 8,

    slug: "independent-candidacy-bill",

    title: "Independent Candidate Bill, 2025",

    shortTitle: "Independent Candidate Bill",

    type: "Bill",

    status: "Sponsored",

    year: 2025,

    category: "Electoral Reform",

    billNumber: "SB. 736",

    legislativeSession: "10th Senate",

    dateIntroduced: "6 March 2025",

    sponsors: [
      "Sen. Abba Patrick Moro",
    ],

    stage:
      "Recorded in the official Senate Bills Register as sponsored by Senator Abba Patrick Moro.",

    summary:
      "A legislative proposal sponsored by Senator Abba Moro concerning independent candidacy within Nigeria's electoral system.",

    background:
      "The official Senate Bills Register records SB.736 as the Independent Candidate Bill, 2025, sponsored by Senator Abba Patrick Moro.",

    impact:
      "The proposal concerns the legal framework for candidates seeking elective office outside the traditional political-party nomination structure.",

    objectives: [
      "Provide a legislative framework relating to independent candidacy.",
      "Expand the legal architecture governing participation in electoral contests.",
      "Support consideration of alternative routes to elective office within Nigeria's democratic system.",
    ],

    beneficiaries: [
      "Prospective independent candidates",
      "Nigerian voters",
      "Electoral institutions and democratic stakeholders",
    ],

    milestones: [
      {
        date: "6 March 2025",
        title: "Bill Introduced",
        description:
          "SB.736, Independent Candidate Bill, 2025, was entered in the Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",
      },
    ],
    verificationStatus:
      "Official Source Attached",

    sourceTitle:
      "Senate Bills Register — Independent Candidate Bill, 2025",

    sourceType:
      "Official National Assembly Senate Bills Register",

    sourceUrl:
      "https://nass.gov.ng/documents/billdownload/11190.pdf",
  },
  {
    id: 9,
    slug: "apa-state-creation-proposal",
    title: "Apa State Creation Proposal",
    type: "Proposal",
    status: "Proposed",
    year: 2026,
    category: "Constitutional Development",
    summary:
      "Proposal relating to the creation of Apa State.",
  verificationStatus:
    "Awaiting Verification",
  verificationNote:
   "Public constituency record available, but exact official Senate bill number and procedural record have not yet been matched.",
  },
  {
    id: 10,
    slug: "okokolo-agatu-killings-urgent-public-importance",
    title:
      "Matter of Urgent Public Importance on the Okokolo, Agatu Killings",
    shortTitle:
      "Okokolo, Agatu Security Intervention",
    type: "Motion",
    status: "Sponsored",
    year: 2019,
    category: "Security & Public Safety",
    stage:
      "Matter raised under Senate Rule 42; leave obtained to present the matter.",
    summary:
      "A Senate intervention drawing attention to the killing of more than 25 people in Okokolo, Agatu Local Government Area of Benue State.",
    background:
      "The matter was raised as an urgent public concern following reported killings in Okokolo community in Agatu Local Government Area.",
    impact:
      "The intervention placed the security situation affecting the community before the Senate and brought national legislative attention to the protection of lives in the affected area.",
    objectives: [
      "Draw the attention of the Senate to the security situation in Okokolo, Agatu LGA.",
      "Bring the reported killings and their impact on the affected community before the National Assembly.",
      "Support legislative attention to the protection of vulnerable communities.",
    ],
    beneficiaries: [
      "Residents of Okokolo community",
      "Communities in Agatu Local Government Area",
      "Residents of Benue South affected by insecurity",
    ],
    milestones: [
      {
        date: "17 July 2019",
        title: "Matter Raised in the Senate",
        description:
          "Senator Abba Moro raised the matter under Rule 42 as a Matter of Urgent Public Importance.",
      },
      {
        date: "17 July 2019",
        title: "Leave of Senate Obtained",
        description:
          "The Senate granted leave for the matter to be presented in accordance with its rules.",
      },
    ],
    verificationStatus:
      "Official Source Attached",

    verificationNote:
      "Verified against Senate Votes and Proceedings of 17 July 2019.",

    sourceTitle:
      "Senate Votes and Proceedings — 17 July 2019",

    sourceType:
      "Official Senate Votes and Proceedings",

    sourceUrl:
      "https://www.nass.gov.ng/documents/download/10492",
  },

  {
    id: 11,
    slug: "mararaba-mubi-michika-bama-road-motion-amendment",
    title:
      "Amendment to Motion on the Mararaba–Mubi–Michika–Bama Road Contract",
    shortTitle:
      "Road Contract Accountability Intervention",
    type: "Motion",
    status: "Sponsored",
    year: 2020,
    category: "Infrastructure & Oversight",
    stage:
      "Amendment proposed by Senator Abba Moro and adopted by the Senate.",
    summary:
      "A legislative intervention seeking investigation into why the rehabilitation of the Mararaba–Mubi–Michika–Bama road project had been abandoned.",
    background:
      "During consideration of a Senate motion concerning the rehabilitation contract, Senator Abba Moro proposed that the Committee on Works should investigate why the project had been abandoned.",
    impact:
      "The amendment strengthened the Senate's oversight response by shifting attention from merely determining the level of work to investigating the reasons for abandonment of the project.",
    objectives: [
      "Strengthen legislative oversight of an abandoned federal road project.",
      "Require investigation into the reasons for project abandonment.",
      "Promote accountability in the implementation of publicly funded infrastructure.",
    ],
    beneficiaries: [
      "Communities served by the affected road corridor",
      "Road users",
      "Citizens concerned with accountability in public infrastructure delivery",
    ],
    milestones: [
      {
        date: "11 March 2020",
        title: "Amendment Proposed",
        description:
          "Senator Abba Moro proposed an amendment requiring the Senate Committee on Works to investigate why the project was abandoned.",
      },
      {
        date: "11 March 2020",
        title: "Senate Adopted Amendment",
        description:
          "The proposed amendment was agreed to and became part of the Senate resolution on the matter.",
      },
    ],
    verificationStatus:
      "Official Source Attached",

    verificationNote:
      "Verified against Senate Votes and Proceedings of 11 March 2020.",

    sourceTitle:
      "Senate Votes and Proceedings — 11 March 2020",

    sourceType:
      "Official Senate Votes and Proceedings",

    sourceUrl:
      "https://nass.gov.ng/documents/download/10989",
  },
  {
    id: 12,

    slug:
      "agricultural-research-council-amendment-bill-2023",

    title:
      "Agricultural Research Council Act (Amendment) Bill, 2023",

    shortTitle:
      "Agricultural Research Council Amendment Bill",

    type: "Bill",

    status: "Passed by Senate",

    year: 2023,

    category: "Agriculture",

    billNumber: "SB. 212",

    legislativeSession: "10th Senate",

    dateIntroduced: "26 October 2023",

    secondReadingDate: "20 March 2024",

    passedDate: "23 July 2024",

    committee:
      "Senate Committees on Tertiary Institutions and Agriculture",

    committeeReportingPeriod: "4 weeks",

    sponsors: [
      "Sen. Abba Patrick Moro",
    ],

    stage:
      "Passed by the Senate on 23 July 2024 following second reading and committee referral.",

    summary:
      "A bill sponsored by Senator Abba Moro proposing amendments to the Agricultural Research Council legislative framework.",

    background:
      "The bill was introduced in the 10th Senate as an amendment to the Agricultural Research Council Act and subsequently progressed through second reading and committee consideration.",

    impact:
      "The legislative proposal seeks to strengthen the statutory framework governing agricultural research and related institutional development.",

    objectives: [
      "Strengthen the statutory framework for agricultural research.",
      "Support institutional development within Nigeria's agricultural research system.",
      "Improve the legal framework supporting agricultural research and innovation.",
    ],

    beneficiaries: [
      "Agricultural research institutions",
      "Researchers and agricultural professionals",
      "Farmers and agricultural value-chain stakeholders",
    ],

    milestones: [
      {
        date: "26 October 2023",
        title: "Bill Introduced",
        description:
          "The Agricultural Research Council Act (Amendment) Bill was introduced in the Senate.",
      },
      {
        date: "20 March 2024",
        title: "Second Reading",
        description:
          "The Bill progressed through second reading and was referred for committee consideration.",
      },
      {
        date: "23 July 2024",
        title: "Passed by Senate",
        description:
          "The official Senate Bills Register records the Bill as passed.",
      },
    ],
    sourceTitle:
      "Senate Bills Register — Agricultural Research Council Act (Amendment) Bill, 2023",

    sourceType:
      "Official National Assembly Senate Bills Register",

    sourceUrl:
      "https://nass.gov.ng/documents/billdownload/11177.pdf",
  },
  {
    id: 13,

    slug:
      "constitution-alteration-bill-sb-182-2023",

    title:
      "Constitution of the Federal Republic of Nigeria 1999 (Alteration) Bill, 2023",

    shortTitle:
      "Constitution Alteration Bill — SB.182",

    type: "Bill",

    status: "Sponsored",

    year: 2023,

    category: "Constitutional Development",

    billNumber: "SB. 182",

    legislativeSession: "10th Senate",

    dateIntroduced: "18 October 2023",

    sponsors: [
      "Sen. Abba Patrick Moro",
    ],

    stage:
      "Recorded in the official Senate Bills Register as sponsored by Senator Abba Patrick Moro.",

    summary:
      "A Constitution Alteration Bill sponsored by Senator Abba Moro during the 10th Senate.",

    background:
      "The official Senate Bills Register records SB.182 as a Constitution of the Federal Republic of Nigeria 1999 (Alteration) Bill sponsored by Senator Abba Moro.",

    impact:
      "The specific constitutional alteration objective should be added when the underlying bill text or official explanatory memorandum is available.",

    objectives: [
      "Advance a proposed alteration to the Constitution of the Federal Republic of Nigeria.",
    ],

    beneficiaries: [
      "Citizens and institutions affected by the proposed constitutional alteration",
    ],

    milestones: [
      {
        date: "18 October 2023",
        title: "Bill Introduced",
        description:
          "SB.182 was entered in the Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",
      },
    ],
    verificationStatus:
      "Official Source Attached",
  },
  {
  id: 14,

  slug:
    "constitution-alteration-bill-sb-388-2024",

  title:
    "Constitution of the Federal Republic of Nigeria 1999 (Alteration) Bill, 2024",

  shortTitle:
    "Constitution Alteration Bill — SB.388",

  type: "Bill",

  status: "Sponsored",

  year: 2024,

  category: "Constitutional Development",

  billNumber: "SB. 388",

  legislativeSession: "10th Senate",

  dateIntroduced: "7 March 2024",

  sponsors: [
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "Recorded in the Senate Bills Register.",

  summary:
    "A Constitution Alteration Bill sponsored by Senator Abba Moro in the 10th Senate.",

  impact:
    "The substantive constitutional amendment objective will be added when the official bill text is incorporated into the legislative register.",

  milestones: [
    {
      date: "7 March 2024",
      title: "Bill Introduced",
      description:
        "SB.388 was recorded in the Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",
    },
  ],
  verificationStatus:
  "Official Source Attached",
},

{
  id: 15,

  slug:
    "constitution-alteration-bill-sb-389-2024",

  title:
    "Constitution of the Federal Republic of Nigeria 1999 (Alteration) Bill, 2024",

  shortTitle:
    "Constitution Alteration Bill — SB.389",

  type: "Bill",

  status: "Sponsored",

  year: 2024,

  category: "Constitutional Development",

  billNumber: "SB. 389",

  legislativeSession: "10th Senate",

  dateIntroduced: "13 March 2024",

  sponsors: [
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "Recorded in the Senate Bills Register.",

  summary:
    "A second Constitution Alteration Bill sponsored by Senator Abba Moro during March 2024.",

  impact:
    "The substantive constitutional amendment objective will be added after verification against the official bill text.",

  milestones: [
    {
      date: "13 March 2024",
      title: "Bill Introduced",
      description:
        "SB.389 was recorded in the Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",
    },
  ],
  verificationStatus:
    "Official Source Attached",
},
{
  id: 16,

  slug:
    "agricultural-research-council-amendment-bill-2025",

  title:
    "Agricultural Research Council of Nigeria Act (Amendment) Bill, 2025",

  shortTitle:
    "Agricultural Research Council Amendment Bill 2025",

  type: "Bill",

  status: "Passed by Senate",

  year: 2025,

  category: "Agriculture",

  billNumber: "SB. 864",

  legislativeSession: "10th Senate",

  dateIntroduced: "25 June 2025",

  passedDate: "2 July 2025",

  committee:
    "Senate Committee on Agricultural Colleges and Institutions",

  sponsors: [
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "Passed by the Senate on 2 July 2025.",

  summary:
    "An Agricultural Research Council of Nigeria Act amendment bill sponsored by Senator Abba Moro and recorded as passed by the Senate.",

  background:
    "The bill was introduced during the 10th Senate and referred to the Committee on Agricultural Colleges and Institutions.",

  impact:
    "The legislation concerns the statutory framework governing Nigeria's agricultural research institutions.",

  objectives: [
    "Strengthen the legal framework governing agricultural research institutions.",
    "Support institutional development within the agricultural research sector.",
  ],

  beneficiaries: [
    "Agricultural research institutions",
    "Agricultural colleges and related institutions",
    "Researchers, farmers and agricultural stakeholders",
  ],

  milestones: [
    {
      date: "25 June 2025",
      title: "Bill Introduced",
      description:
        "SB.864 was entered in the Senate Bills Register.",
    },
    {
      date: "25 June 2025",
      title: "Committee Referral",
      description:
        "The Bill was referred to the Committee on Agricultural Colleges and Institutions.",
    },
    {
      date: "2 July 2025",
      title: "Passed by Senate",
      description:
        "The Senate Bills Register records SB.864 as passed.",
    },
  ],
  sourceTitle:
    "Senate Bills Register — Agricultural Research Council of Nigeria Act (Amendment) Bill, 2025",

  sourceType:
    "Official National Assembly Senate Bills Register",

  sourceUrl:
    "https://nass.gov.ng/documents/billdownload/11207.pdf",
},
{
  id: 17,

  slug:
    "agricultural-harvest-processing-zone-establishment-bill-2024",

  title:
    "Agricultural Harvest and Processing Zone (Establishment) Bill, 2024",

  shortTitle:
    "Agricultural Harvest and Processing Zone Bill",

  type: "Bill",

  status: "Sponsored",

  year: 2024,

  category: "Agriculture",

  billNumber: "SB. 411",

  legislativeSession: "10th Senate",

  dateIntroduced: "30 April 2024",

  sponsors: [
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "Recorded in the official Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",

  summary:
    "A bill proposing the establishment of an Agricultural Harvest and Processing Zone framework to support agricultural production, processing and value-chain development.",

  background:
    "The official Senate Bills Register records SB.411, Agricultural Harvest and Processing Zone (Establishment) Bill, 2024, under the sponsorship of Senator Abba Patrick Moro.",

  impact:
    "The proposal is intended to strengthen agricultural value-chain infrastructure by supporting organised harvesting, processing and related economic activity.",

  objectives: [
    "Support structured agricultural harvesting and processing activities.",
    "Strengthen agricultural value chains and post-harvest development.",
    "Promote agro-processing and related enterprise opportunities.",
    "Improve the institutional framework supporting agricultural production and processing.",
  ],

  beneficiaries: [
    "Farmers and agricultural producers",
    "Agro-processors",
    "Agricultural entrepreneurs",
    "Rural communities and value-chain participants",
  ],

  milestones: [
    {
      date: "30 April 2024",
      title: "Bill Introduced",
      description:
        "SB.411 was recorded in the Senate Bills Register under the sponsorship of Senator Abba Patrick Moro.",
    },
  ],
  sourceTitle:
    "Senate Bills Register — Agricultural Harvest and Processing Zone (Establishment) Bill, 2024",

  sourceType:
    "Official National Assembly Senate Bills Register",

  sourceUrl:
    "https://nass.gov.ng/documents/billdownload/11151.pdf",
},
{
  id: 18,

  slug:
    "power-rotation-bill-2022",

  title:
    "Power Rotation Bill, 2022",

  shortTitle:
    "Power Rotation Bill — 9th Senate",

  type: "Bill",

  status: "Stepped Down",

  year: 2022,

  category:
    "Governance & Constitutional Reform",

  legislativeSession:
    "9th Senate",

  sponsors: [
    "Sen. Abba Patrick Moro",
  ],

  stage:
    "The bill was considered in the Senate but was stepped down during legislative consideration.",

  summary:
    "An earlier legislative proposal sponsored by Senator Abba Moro seeking a statutory framework for rotation of political offices in Nigeria.",

  background:
    "The 2022 Power Rotation Bill was an earlier legislative effort by Senator Abba Moro addressing rotation of political offices. It preceded the later constitutional-alteration proposal introduced during the 10th Senate.",

  impact:
    "Although the proposal did not proceed through the full legislative process, it formed part of the parliamentary debate concerning political inclusion, representation and rotation of elective offices.",

  objectives: [
    "Promote political inclusion through rotation of specified elective offices.",
    "Provide a legislative framework for broader participation in political leadership.",
    "Address concerns relating to equitable political representation.",
  ],

  beneficiaries: [
    "Nigeria's geopolitical constituencies",
    "Political and democratic stakeholders",
    "Citizens participating in Nigeria's electoral system",
  ],

  milestones: [
    {
      date: "2022",
      title: "Bill Presented",
      description:
        "The Power Rotation Bill was presented during the 9th Senate under the sponsorship of Senator Abba Moro.",
    },
    {
      date: "2022",
      title: "Bill Stepped Down",
      description:
        "The proposal was stepped down during Senate consideration and did not proceed through the full legislative process.",
    },
  ],

  verificationStatus:
    "Verified - Source Pending",

  verificationNote:
    "The existence of the 2022 Power Rotation Bill, its sponsorship by Senator Abba Moro and its being stepped down during Senate consideration are supported by contemporary public reporting. The corresponding official National Assembly source should be attached when conclusively identified.",
},
];

export const legislativeTypes = [
  "All Types",
  "Act",
  "Bill",
  "Motion",
  "Proposal",
] as const;

export const legislativeStatuses = [
  "All Statuses",
  "Presidential Assent",
  "Passed by Senate",
  "In Progress",
  "Sponsored",
  "Proposed",
  "Stepped Down",
] as const;

export function getLegislativeRecordBySlug(
  slug: string
) {
  return legislativeRecords.find(
    (record) => record.slug === slug
  );
}