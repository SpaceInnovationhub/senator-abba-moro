"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  ArrowRight,
  Building2,
  CalendarDays,
  Filter,
  MapPin,
  Search,
  X,
} from "lucide-react";

import {
  explorerProjects,
  projectCategories,
  projectLgas,
  projectStatuses,
  projectYears,
} from "../../data/projectExplorer";

import Container from "../ui/Container";

type ProjectCategory = (typeof projectCategories)[number];
type ProjectStatus = (typeof projectStatuses)[number];

const statusStyles: Record<ProjectStatus, string> = {
  "All Statuses": "bg-slate-200 text-slate-800",
  Completed: "bg-green-700 text-white",
  Ongoing: "bg-amber-500 text-green-950",
  "2026 Budget": "bg-blue-700 text-white",
  Planned: "bg-slate-700 text-white",
  Recorded: "bg-slate-600 text-white",
};

const initialVisibleProjects = 6;

export default function ProjectExplorer() {
  const searchParams = useSearchParams();

  /*
   * Read incoming URL filters.
   *
   * Examples:
   * /projects?lga=Ohimini
   * /projects?lga=Otukpo&category=Education
   * /projects?status=Completed
   * /projects?year=2026
   */
  const queryLga = searchParams.get("lga");
  const queryCategory = searchParams.get("category");
  const queryStatus = searchParams.get("status");
  const queryYear = searchParams.get("year");

  /*
   * Search
   */
  const [searchQuery, setSearchQuery] = useState("");

  /*
   * Category
   *
   * Use the URL category if it is a valid category.
   * Otherwise default to All Categories.
   */
  const [category, setCategory] =
    useState<(typeof projectCategories)[number]>(() => {
      if (
        queryCategory &&
        projectCategories.includes(
          queryCategory as (typeof projectCategories)[number]
        )
      ) {
        return queryCategory as (typeof projectCategories)[number];
      }

      return "All Categories";
    });

  /*
   * Status
   */
  const [status, setStatus] =
    useState<(typeof projectStatuses)[number]>(() => {
      if (
        queryStatus &&
        projectStatuses.includes(
          queryStatus as (typeof projectStatuses)[number]
        )
      ) {
        return queryStatus as (typeof projectStatuses)[number];
      }

      return "All Statuses";
    });

  /*
   * LGA
   */
  const [lga, setLga] =
    useState<(typeof projectLgas)[number]>(() => {
      if (
        queryLga &&
        projectLgas.includes(
          queryLga as (typeof projectLgas)[number]
        )
      ) {
        return queryLga as (typeof projectLgas)[number];
      }

      return "All LGAs";
    });

  /*
   * Year
   */
  const [year, setYear] =
    useState<(typeof projectYears)[number]>(() => {
      if (
        queryYear &&
        projectYears.includes(
          queryYear as (typeof projectYears)[number]
        )
      ) {
        return queryYear as (typeof projectYears)[number];
      }

      return "All Years";
    });

  /*
   * Pagination / Load More
   */
  const [visibleCount, setVisibleCount] =
    useState(initialVisibleProjects);

  /*
   * Filter projects
   */
  const filteredProjects = useMemo(() => {
    const normalizedSearch =
      searchQuery.trim().toLowerCase();

    return explorerProjects.filter(
      (project: (typeof explorerProjects)[number]) => {
        const matchesSearch =
          !normalizedSearch ||
          project.title
            .toLowerCase()
            .includes(normalizedSearch) ||
          project.description
            .toLowerCase()
            .includes(normalizedSearch) ||
          project.category
            .toLowerCase()
            .includes(normalizedSearch) ||
          project.lga
            .toLowerCase()
            .includes(normalizedSearch) ||
          project.community
            .toLowerCase()
            .includes(normalizedSearch);

        const matchesCategory =
          category === "All Categories" ||
          project.category === category;

        const matchesStatus =
          status === "All Statuses" ||
          project.status === status;

        const matchesLga =
          lga === "All LGAs" ||
          project.lga === lga;

        const matchesYear =
          year === "All Years" ||
          project.year === Number(year);

        return (
          matchesSearch &&
          matchesCategory &&
          matchesStatus &&
          matchesLga &&
          matchesYear
        );
      }
    );
  }, [
    searchQuery,
    category,
    status,
    lga,
    year,
  ]);

  /*
   * Projects currently visible
   */
  const visibleProjects = filteredProjects.slice(
    0,
    visibleCount
  );

  /*
   * Determine whether any filter is active
   */
  const filtersActive =
    searchQuery !== "" ||
    category !== "All Categories" ||
    status !== "All Statuses" ||
    lga !== "All LGAs" ||
    year !== "All Years";

  /*
   * Reset all filters
   */
  function resetFilters() {
    setSearchQuery("");
    setCategory("All Categories");
    setStatus("All Statuses");
    setLga("All LGAs");
    setYear("All Years");
    setVisibleCount(initialVisibleProjects);
  }

  /*
   * Reset pagination whenever a filter changes
   */
  function updateFilter(callback: () => void) {
    callback();
    setVisibleCount(initialVisibleProjects);
  }

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
              <Building2 size={17} />
              Constituency Projects
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Explore projects across Benue South
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Search and filter constituency projects by
              category, implementation status, Local
              Government Area and year.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-green-700 px-6 font-bold text-green-700 transition hover:bg-green-50"
          >
            View Complete Project Register
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* ==================================================
            SEARCH AND FILTERS
        ================================================== */}

        <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
          {/* Search */}

          <div className="relative">
            <Search
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                updateFilter(() =>
                  setSearchQuery(event.target.value)
                )
              }
              placeholder="Search roads, schools, healthcare, communities or LGAs..."
              className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-700 focus:ring-2 focus:ring-green-700/15"
            />
          </div>

          {/* Filter controls */}

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {/* Category */}

            <label>
              <span className="sr-only">
                Filter by category
              </span>

              <select
                value={category}
                onChange={(event) =>
                  updateFilter(() =>
                    setCategory(
                      event.target.value as
                        | "All Categories"
                        | ProjectCategory
                    )
                  )
                }
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              >
                {projectCategories.map(
                  (
                    option: (typeof projectCategories)[number]
                  ) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  )
                )}
              </select>
            </label>

            {/* Status */}

            <label>
              <span className="sr-only">
                Filter by status
              </span>

              <select
                value={status}
                onChange={(event) =>
                  updateFilter(() =>
                    setStatus(
                      event.target.value as
                        | "All Statuses"
                        | ProjectStatus
                    )
                  )
                }
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              >
                {projectStatuses.map(
                  (
                    option: (typeof projectStatuses)[number]
                  ) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  )
                )}
              </select>
            </label>

            {/* LGA */}

            <label>
              <span className="sr-only">
                Filter by Local Government Area
              </span>

              <select
                value={lga}
                onChange={(event) =>
                  updateFilter(() =>
                    setLga(
                      event.target.value as
                        (typeof projectLgas)[number]
                    )
                  )
                }
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              >
                {projectLgas.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option === "Benue South"
                        ? "Constituency-wide"
                        : option}
                    </option>
                  ))}

              </select>
            </label>

            {/* Year */}

            <label>
              <span className="sr-only">
                Filter by year
              </span>

              <select
                value={year}
                onChange={(event) =>
                  updateFilter(() =>
                    setYear(
                      event.target.value as
                        (typeof projectYears)[number]
                    )
                  )
                }
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              >
                {projectYears.map(
                  (
                    option: (typeof projectYears)[number]
                  ) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  )
                )}
              </select>
            </label>
          </div>

          {/* Result counter */}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Filter
                size={17}
                className="text-green-700"
              />

              <span>
                <strong className="text-slate-950">
                  {filteredProjects.length}
                </strong>{" "}
                {filteredProjects.length === 1
                  ? "project"
                  : "projects"}{" "}
                found
              </span>
            </div>

            {filtersActive && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
              >
                <X size={16} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* ==================================================
            PROJECT RESULTS
        ================================================== */}

        {visibleProjects.length > 0 ? (
          <>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map(
                (
                  project: (typeof explorerProjects)[number]
                ) => (
                  <article
                    key={project.id}
                    className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Project image */}

                    <div className="relative h-[230px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Status */}

                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${
                          statusStyles[
                            project.status as ProjectStatus
                          ]
                        }`}
                      >
                        {project.status}
                      </span>

                      {/* Category */}

                      <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-green-800 shadow-sm backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    {/* Project content */}

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-xl font-extrabold leading-7 text-slate-950">
                        {project.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <MapPin
                            size={14}
                            className="text-green-700"
                          />

                          {project.lga === "Benue South"
                            ? "Constituency-wide"
                            : `${project.lga} LGA`}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <CalendarDays
                            size={14}
                            className="text-green-700"
                          />

                          {project.year}
                        </div>
                      </div>

                      <p className="mt-2 text-xs font-semibold text-green-700">
                        {project.community}
                      </p>

                      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                        {project.description}
                      </p>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                      >
                        View project
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                )
              )}
            </div>

            {/* Load more */}

            {visibleCount < filteredProjects.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount(
                      (current) =>
                        current +
                        initialVisibleProjects
                    )
                  }
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-green-800 px-7 font-bold text-white transition hover:bg-green-700"
                >
                  Load More Projects
                </button>
              </div>
            )}
          </>
        ) : (
          /* No results */

          <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <Building2
              size={44}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-5 text-xl font-extrabold text-slate-900">
              No projects match these filters
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Clear the filters or search for another
              project, community, category or LGA.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-green-800 px-6 font-bold text-white transition hover:bg-green-700"
            >
              Reset Project Filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}