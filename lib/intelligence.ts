import { constituencyLgas } from "@/data/intelligence";
import { explorerProjects } from "@/data/projectExplorer";
import { legislativeRecords } from "@/data/legislation";

/* ======================================================
   LGA HELPERS
====================================================== */

export function getAllLgas() {
  return constituencyLgas;
}

export function getLgaBySlug(slug: string) {
  return constituencyLgas.find(
    (lga) => lga.slug === slug
  );
}

/* ======================================================
   PROJECT HELPERS
====================================================== */

/**
 * Returns projects belonging directly to an LGA.
 *
 * When includeConstituencyWide is true,
 * constituency-wide Benue South programmes are also returned.
 */
export function getProjectsByLga(
  lgaName: string,
  includeConstituencyWide = false
) {
  const normalizedLga = lgaName
    .trim()
    .toLowerCase();

  return explorerProjects.filter((project) => {
    const projectLga = project.lga
      .trim()
      .toLowerCase();

    return (
      projectLga === normalizedLga ||
      (includeConstituencyWide &&
        projectLga === "benue south")
    );
  });
}

/**
 * Used by /constituency/[slug].
 *
 * Important:
 * constituency-wide programmes are intentionally excluded
 * from LGA project totals to avoid counting them nine times.
 */
export function getProjectsByLgaSlug(slug: string) {
  const lga = getLgaBySlug(slug);

  if (!lga) {
    return [];
  }

  return getProjectsByLga(
    lga.name,
    false
  );
}

export function getConstituencyWideProjects() {
  return explorerProjects.filter(
    (project) =>
      project.lga === "Benue South"
  );
}

export function getProjectsByCategory(
  category: string
) {
  const normalizedCategory = category
    .trim()
    .toLowerCase();

  return explorerProjects.filter(
    (project) =>
      project.category.toLowerCase() ===
      normalizedCategory
  );
}

export function getCompletedProjects() {
  return explorerProjects.filter(
    (project) =>
      project.status === "Completed"
  );
}

export function getOngoingProjects() {
  return explorerProjects.filter(
    (project) =>
      project.status === "Ongoing"
  );
}

export function getRecordedProjects() {
  return explorerProjects.filter(
    (project) =>
      project.status === "Recorded"
  );
}

export function getBudget2026Projects() {
  return explorerProjects.filter(
    (project) =>
      project.status === "2026 Budget"
  );
}

export function getPlannedProjects() {
  return explorerProjects.filter(
    (project) =>
      project.status === "Planned"
  );
}

/* ======================================================
   LGA STATISTICS
====================================================== */

export function getLgaProjectStats(slug: string) {
  const projects =
    getProjectsByLgaSlug(slug);

  return {
    total: projects.length,

    completed: projects.filter(
      (project) =>
        project.status === "Completed"
    ).length,

    ongoing: projects.filter(
      (project) =>
        project.status === "Ongoing"
    ).length,

    recorded: projects.filter(
      (project) =>
        project.status === "Recorded"
    ).length,

    budget2026: projects.filter(
      (project) =>
        project.status === "2026 Budget"
    ).length,

    planned: projects.filter(
      (project) =>
        project.status === "Planned"
    ).length,

    roads: projects.filter(
      (project) =>
        project.category === "Roads" ||
        project.category === "Bridges" ||
        project.category === "Drainage"
    ).length,

    education: projects.filter(
      (project) =>
        project.category === "Education" ||
        project.category === "Scholarships" ||
        project.category === "ICT"
    ).length,

    healthcare: projects.filter(
      (project) =>
        project.category === "Healthcare"
    ).length,

    empowerment: projects.filter(
      (project) =>
        project.category ===
          "Youth Empowerment" ||
        project.category ===
          "Women Empowerment"
    ).length,

    electrification: projects.filter(
      (project) =>
        project.category ===
        "Electrification"
    ).length,

    water: projects.filter(
      (project) =>
        project.category === "Water"
    ).length,

    agriculture: projects.filter(
      (project) =>
        project.category === "Agriculture"
    ).length,

    security: projects.filter(
      (project) =>
        project.category === "Security"
    ).length,

    communityDevelopment: projects.filter(
      (project) =>
        project.category ===
        "Community Development"
    ).length,
  };
}

/* ======================================================
   LGA SUMMARY
====================================================== */

export function getProjectSummaryByLga() {
  return constituencyLgas.map((lga) => {
    const projects =
      getProjectsByLga(
        lga.name,
        false
      );

    return {
      lga: lga.name,

      total: projects.length,

      completed: projects.filter(
        (project) =>
          project.status === "Completed"
      ).length,

      ongoing: projects.filter(
        (project) =>
          project.status === "Ongoing"
      ).length,

      recorded: projects.filter(
        (project) =>
          project.status === "Recorded"
      ).length,

      budget2026: projects.filter(
        (project) =>
          project.status ===
          "2026 Budget"
      ).length,
    };
  });
}

/* ======================================================
   CATEGORY SUMMARY
====================================================== */

export function getProjectCategorySummary() {
  const categories =
    new Map<string, number>();

  explorerProjects.forEach(
    (project) => {
      categories.set(
        project.category,
        (categories.get(
          project.category
        ) ?? 0) + 1
      );
    }
  );

  return Array.from(
    categories.entries()
  )
    .map(
      ([category, total]) => ({
        category,
        total,
      })
    )
    .sort(
      (a, b) =>
        b.total - a.total
    );
}

/* ======================================================
   LEGISLATIVE INTELLIGENCE
====================================================== */

export function getLegislativeRecords() {
  return legislativeRecords;
}

/* ======================================================
   GLOBAL SEARCH
====================================================== */

export function searchConstituencyIntelligence(
  query: string
) {
  const normalizedQuery = query
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return {
      projects: [],
      legislation: [],
      lgas: [],
    };
  }

  const projects =
    explorerProjects.filter(
      (project) =>
        project.title
          .toLowerCase()
          .includes(normalizedQuery) ||
        project.description
          .toLowerCase()
          .includes(normalizedQuery) ||
        project.category
          .toLowerCase()
          .includes(normalizedQuery) ||
        project.lga
          .toLowerCase()
          .includes(normalizedQuery) ||
        project.community
          .toLowerCase()
          .includes(normalizedQuery)
    );

  const legislation =
    legislativeRecords.filter(
      (record) =>
        record.title
          .toLowerCase()
          .includes(normalizedQuery) ||
        record.summary
          .toLowerCase()
          .includes(normalizedQuery) ||
        record.type
          .toLowerCase()
          .includes(normalizedQuery)
    );

  const lgas =
    constituencyLgas.filter(
      (lga) =>
        lga.name
          .toLowerCase()
          .includes(normalizedQuery) ||
        lga.headquarters
          .toLowerCase()
          .includes(normalizedQuery)
    );

  return {
    projects,
    legislation,
    lgas,
  };
}