"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChevronDown,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

interface NavigationChild {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationChild[];
}

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
    children: [
      {
        name: "All Projects",
        href: "/projects",
      },
      {
        name: "Roads & Bridges",
        href: "/projects/infrastructure",
      },
      {
        name: "Drainage & Erosion Control",
        href: "/projects/drainage",
      },
      {
        name: "Community Projects",
        href: "/projects/community",
      },
      {
        name: "2026 Budget Projects",
        href: "/projects/budget-2026",
      },
      {
        name: "Ongoing Projects",
        href: "/projects?status=ongoing",
      },
      {
        name: "Completed Projects",
        href: "/projects?status=completed",
      },
    ],
  },
  {
    name: "Legislation",
    href: "/legislative-work",
    children: [
      {
        name: "Legislative Achievements",
        href: "/legislative-work",
      },
      {
        name: "Laws with Presidential Assent",
        href: "/legislative-work/laws",
      },
      {
        name: "Bills Sponsored",
        href: "/legislative-work/bills",
      },
      {
        name: "Motions",
        href: "/legislative-work/motions",
      },
      {
        name: "Committee Engagements",
        href: "/legislative-work/committees",
      },
    ],
  },
  {
    name: "Empowerment",
    href: "/empowerment",
    children: [
      {
        name: "Youth Empowerment",
        href: "/empowerment/youth",
      },
      {
        name: "Women Empowerment",
        href: "/empowerment/women",
      },
      {
        name: "Scholarships",
        href: "/empowerment/scholarships",
      },
      {
        name: "Skills Development",
        href: "/empowerment/skills",
      },
      {
        name: "Grants & Enterprise Support",
        href: "/empowerment/grants",
      },
      {
        name: "Social Intervention",
        href: "/empowerment/social-intervention",
      },
    ],
  },
  {
    name: "Development",
    href: "/development",
    children: [
      {
        name: "Education",
        href: "/development/education",
      },
      {
        name: "Healthcare",
        href: "/development/healthcare",
      },
      {
        name: "Agriculture",
        href: "/development/agriculture",
      },
      {
        name: "Water Supply",
        href: "/development/water",
      },
      {
        name: "Rural Electrification",
        href: "/development/electrification",
      },
      {
        name: "Security & Public Safety",
        href: "/development/security",
      },
    ],
  },
  {
    name: "Constituency",
    href: "/constituency",
    children: [
      {
        name: "Benue South Overview",
        href: "/constituency",
      },
      {
        name: "Interactive LGA Map",
        href: "/constituency/map",
      },
      {
        name: "LGA Profiles",
        href: "/constituency/lgas",
      },
      {
        name: "Community Development",
        href: "/constituency/community-development",
      },
    ],
  },
  {
    name: "Media",
    href: "/news",
    children: [
      {
        name: "News & Updates",
        href: "/news",
      },
      {
        name: "Events",
        href: "/events",
      },
      {
        name: "Photo Gallery",
        href: "/gallery",
      },
      {
        name: "Videos",
        href: "/gallery/videos",
      },
      {
        name: "Downloads",
        href: "/downloads",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [openMobileDropdown, setOpenMobileDropdown] =
    useState<string | null>(null);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setOpenMobileDropdown(null);
  }

  function toggleMobileDropdown(name: string) {
    setOpenMobileDropdown((current) =>
      current === name ? null : name
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-[82px] items-center justify-between gap-5">
          {/* Brand */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-3"
            aria-label="Senator Abba Moro homepage"
          >
            <Image
              src="/images/logos/senate-logo.png"
              alt="Nigerian Senate logo"
              width={58}
              height={58}
              priority
              className="h-[58px] w-[58px] object-contain"
            />

            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-green-800">
                Senator
              </p>

              <p className="whitespace-nowrap text-[21px] font-extrabold leading-none text-green-950">
                Abba Moro
              </p>

              <p className="mt-1 whitespace-nowrap text-[11px] text-slate-500">
                Benue South Senatorial District
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}

          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.name}
                    className="group relative"
                  >
                    <Link
                      href={item.href}
                      className={`relative flex h-[82px] items-center gap-1.5 whitespace-nowrap px-3 text-[13px] font-semibold transition ${
                        active
                          ? "text-green-800"
                          : "text-slate-800 hover:text-green-700"
                      }`}
                    >
                      {item.name}

                      <ChevronDown
                        size={14}
                        className="transition duration-200 group-hover:rotate-180"
                      />

                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[3px] origin-center rounded-t-full bg-green-700 transition-transform duration-200 ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {/* Desktop dropdown */}

                    <div className="pointer-events-none absolute left-0 top-[76px] z-50 w-[285px] translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-800"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex h-[82px] items-center whitespace-nowrap px-3 text-[13px] font-semibold transition ${
                    active
                      ? "text-green-800"
                      : "text-slate-800 hover:text-green-700"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[3px] origin-center rounded-t-full bg-green-700 transition-transform duration-200 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop feedback button */}

          <Link
            href="/feedback"
            className="hidden h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-green-800 px-5 text-sm font-bold !text-white shadow-md transition hover:bg-green-700 hover:!text-white xl:inline-flex"
          >
            <MessageCircle
              size={18}
              className="text-white"
            />

            <span className="text-white">
              Constituency Feedback
            </span>
          </Link>

          {/* Mobile menu button */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:bg-slate-50 xl:hidden"
          >
            {mobileOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-6 lg:px-8">
            <nav className="max-h-[calc(100vh-90px)] overflow-y-auto py-5">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const active = isActive(item.href);

                  const dropdownOpen =
                    openMobileDropdown === item.name;

                  if (item.children) {
                    return (
                      <div key={item.name}>
                        <div
                          className={`flex items-center rounded-xl transition ${
                            active
                              ? "bg-green-50"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={`flex-1 px-4 py-3 text-sm font-semibold ${
                              active
                                ? "text-green-800"
                                : "text-slate-800"
                            }`}
                          >
                            {item.name}
                          </Link>

                          <button
                            type="button"
                            aria-label={`Toggle ${item.name} submenu`}
                            aria-expanded={dropdownOpen}
                            onClick={() =>
                              toggleMobileDropdown(item.name)
                            }
                            className="mr-2 flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-white"
                          >
                            <ChevronDown
                              size={17}
                              className={`transition duration-200 ${
                                dropdownOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        {dropdownOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-green-100 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-green-50 hover:text-green-800"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? "bg-green-50 text-green-800"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/feedback"
                onClick={closeMobileMenu}
                className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-green-800 px-5 text-sm font-bold !text-white"
              >
                <MessageCircle
                  size={18}
                  className="text-white"
                />

                <span className="text-white">
                  Constituency Feedback
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}