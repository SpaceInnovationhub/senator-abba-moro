export type RecordStatus =
  | "Completed"
  | "Ongoing"
  | "Planned"
  | "2026 Budget"
  | "Archived";

export interface LgaRecord {
  id: number;
  slug: string;
  name: string;
  headquarters: string;
  description: string;
  population?: string;
  wards?: number;
  communities?: number;
}

export interface CommunityRecord {
  id: number;
  slug: string;
  name: string;
  lga: string;
  ward?: string;
  description?: string;
}

export interface ConstituencyProjectRecord {
  id: number;
  slug: string;
  title: string;
  category: string;
  status: RecordStatus;
  lga: string;
  ward?: string;
  community?: string;

  year: number;
  progress: number;

  description: string;

  image?: string;
  gallery?: string[];

  budget?: string;
  fundingSource?: string;
  contractor?: string;

  latitude?: number;
  longitude?: number;

  beneficiaries?: string;
}

export interface LegislativeRecord {
  id: number;
  slug: string;
  title: string;
  type: string;
  status: string;
  year: string;
  summary: string;
  impact?: string;
}

export interface EmpowermentProgramme {
  id: number;
  slug: string;
  title: string;

  category:
    | "Youth"
    | "Women"
    | "Agriculture"
    | "ICT"
    | "Skills"
    | "Enterprise"
    | "Social Intervention";

  status: RecordStatus;
  year: number;

  lga?: string;
  community?: string;

  beneficiaries?: number;

  description: string;
}

export interface ScholarshipRecord {
  id: number;
  slug: string;
  title: string;
  year: number;

  type:
    | "Local"
    | "Foreign"
    | "Undergraduate"
    | "Postgraduate"
    | "Professional";

  beneficiaries?: number;
  status: RecordStatus;

  description: string;
}

export interface HealthRecord {
  id: number;
  slug: string;
  title: string;

  category:
    | "Primary Healthcare Centre"
    | "Medical Outreach"
    | "Equipment"
    | "Tele-health"
    | "Ambulance"
    | "Drugs";

  lga: string;
  community?: string;

  status: RecordStatus;
  year: number;

  description: string;
}

export interface EducationRecord {
  id: number;
  slug: string;
  title: string;

  category:
    | "Classrooms"
    | "University"
    | "College"
    | "Library"
    | "Lecture Theatre"
    | "ICT"
    | "Scholarship";

  lga?: string;
  community?: string;

  status: RecordStatus;
  year: number;

  description: string;
}

export interface MediaRecord {
  id: number;
  slug: string;
  title: string;

  type:
    | "News"
    | "Press Release"
    | "Photo"
    | "Video"
    | "Document";

  date: string;

  image?: string;
  file?: string;

  description?: string;
}