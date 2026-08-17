import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  MapPin,
  Route,
  Users,
  Zap,
} from "lucide-react";

import BenueSouthMap from "./BenueSouthMap";

const featuredProjects = [
  {
    id: 1,
    title: "Otukpo–Obi–Oju Federal Road",
    location: "Benue South",
    category: "Road Infrastructure",
    status: "Ongoing",
    image: "/images/projects/otukpo-obi-oju-road.jpg",
    description:
      "A flagship federal road project connecting major communities across Benue South Senatorial District.",
  },
  {
    id: 2,
    title: "Federal University of Health Sciences, Otukpo",
    location: "Otukpo LGA",
    category: "Higher Education",
    status: "Completed",
    image: "/images/projects/fuhso.jpg",
    description:
      "A landmark higher-education institution established through legislation sponsored by Senator Abba Moro.",
  },
  {
    id: 3,
    title: "Benue South Rural Electrification Programme",
    location: "Benue South",
    category: "Electrification",
    status: "Ongoing",
    image: "/images/projects/rural-electrification.jpg",
    description:
      "Transformer distribution, rural line extensions, mini-grid development and solar street-light installations.",
  },
];

const newsItems = [
  {
    id: 1,
    title:
      "Federal University of Health Sciences, Otukpo Establishment Act Receives Presidential Assent",
    date: "June 13, 2026",
    category: "Legislation",
    image: "/images/news/fuhso-act.jpg",
  },
  {
    id: 2,
    title:
      "Federal College of Agricultural Technology, Ojapo-Opialu Establishment Act Signed",
    date: "June 8, 2026",
    category: "Education",
    image: "/images/news/agricultural-college.jpg",
  },
  {
    id: 3,
    title:
      "Otukpo–Obi–Oju Federal Road Construction Advances to New Phase",
    date: "May 30, 2026",
    category: "Infrastructure",
    image: "/images/news/otukpo-obi-oju-road.jpg",
  },
];

const impactHighlights = [
  {
    title: "Presidential Assent",
    value: "3 Acts",
    description:
      "Three establishment and development laws successfully assented to.",
    href: "/legislative-work/laws",
    icon: FileCheck2,
  },
  {
    title: "Roads & Bridges",
    value: "36 Projects",
    description:
      "Road construction, rehabilitation, bridge and drainage projects.",
    href: "/projects/infrastructure",
    icon: Route,
  },
  {
    title: "Rural Electrification",
    value: "20+ Projects",
    description:
      "Electricity extensions, transformers, mini-grids and solar lighting.",
    href: "/development/electrification",
    icon: Zap,
  },
  {
    title: "Education",
    value: "50+ Interventions",
    description:
      "Classrooms, lecture halls, libraries, scholarships and institutions.",
    href: "/development/education",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    value: "10+ PHCs",
    description:
      "Primary healthcare centres, medical outreach and equipment support.",
    href: "/development/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Empowerment",
    value: "Youth & Women",
    description:
      "ICT, enterprise, agricultural, vocational and mobility support.",
    href: "/empowerment",
    icon: Users,
  },
];

export default function HomeDashboard() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Main dashboard row */}

        <div className="grid items-stretch gap-6 xl:grid-cols-[1.55fr_0.8fr_0.8fr]">
          {/* Featured projects */}

          <section className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                  Featured Projects
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Selected flagship constituency projects
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-green-700 transition hover:gap-2"
              >
                View all
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-5 grid flex-1 gap-4 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-[165px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
                        project.status === "Completed"
                          ? "bg-green-700"
                          : "bg-amber-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="line-clamp-2 text-[15px] font-bold leading-6 text-slate-950">
                      {project.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-1 text-xs text-slate-500">
                        <MapPin
                          size={13}
                          className="shrink-0 text-green-700"
                        />

                        <span className="truncate">
                          {project.location}
                        </span>
                      </div>

                      <span className="shrink-0 rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-700">
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-600">
                      {project.description}
                    </p>

                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-green-700 transition hover:gap-2.5"
                    >
                      View details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Latest news */}

          <section className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                  Latest News
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Legislative and constituency updates
                </p>
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-green-700 transition hover:gap-2"
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-4 flex-1 divide-y divide-slate-100">
              {newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group -mx-2 grid grid-cols-[92px_1fr] gap-3 rounded-xl px-2 py-4 transition hover:bg-slate-50 first:pt-0"
                >
                  <div className="relative h-[70px] overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="92px"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="line-clamp-3 text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-green-700">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                      <CalendarDays
                        size={12}
                        className="shrink-0"
                      />

                      <span>{item.date}</span>

                      <span className="text-slate-300">
                        |
                      </span>

                      <span>{item.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Interactive map */}

          <BenueSouthMap />
        </div>

        {/* Achievement summary */}

        <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                Achievement Overview
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                Transformative representation across Benue South
              </h2>
            </div>

            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3"
            >
              Explore all achievements
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {impactHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                      <Icon size={21} />
                    </div>

                    <CheckCircle2
                      size={17}
                      className="text-amber-500"
                    />
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-green-700">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xl font-extrabold text-slate-950">
                    {item.value}
                  </p>

                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-green-700 transition group-hover:gap-2">
                    View details
                    <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}