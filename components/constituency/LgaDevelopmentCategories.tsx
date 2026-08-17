import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Route,
  Sprout,
  Users,
  Waves,
  Zap,
} from "lucide-react";

import Container from "../ui/Container";

interface LgaDevelopmentCategoriesProps {
  lgaName: string;

  stats: {
    roads: number;
    education: number;
    healthcare: number;
    empowerment: number;
    electrification: number;
    water: number;
    agriculture: number;
  };
}

export default function LgaDevelopmentCategories({
  lgaName,
  stats,
}: LgaDevelopmentCategoriesProps) {
  const categories = [
    {
      title: "Roads & Infrastructure",
      value: stats.roads,
      icon: Route,
      href: `/projects?lga=${lgaName}&category=Roads`,
    },
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      href: `/projects?lga=${lgaName}&category=Education`,
    },
    {
      title: "Healthcare",
      value: stats.healthcare,
      icon: HeartPulse,
      href: `/projects?lga=${lgaName}&category=Healthcare`,
    },
    {
      title: "Empowerment",
      value: stats.empowerment,
      icon: Users,
      href: `/projects?lga=${lgaName}&category=Youth%20Empowerment`,
    },
    {
      title: "Electrification",
      value: stats.electrification,
      icon: Zap,
      href: `/projects?lga=${lgaName}&category=Electrification`,
    },
    {
      title: "Water",
      value: stats.water,
      icon: Waves,
      href: `/projects?lga=${lgaName}&category=Water`,
    },
    {
      title: "Agriculture",
      value: stats.agriculture,
      icon: Sprout,
      href: `/projects?lga=${lgaName}&category=Agriculture`,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
          Development Intelligence
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
          Development sectors in {lgaName}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-[22px] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-green-200 hover:bg-green-50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                    <Icon size={22} />
                  </div>

                  <p className="text-3xl font-extrabold text-green-950">
                    {category.value}
                  </p>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {category.title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3">
                  Explore
                  <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}