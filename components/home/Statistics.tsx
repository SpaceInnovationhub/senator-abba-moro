"use client";

import CountUp from "react-countup";

import {
  Briefcase,
  Building2,
  GraduationCap,
  HandHeart,
  Hospital,
  MapPinned,
  Route,
  Scale,
  ScrollText,
  Users,
  Zap,
} from "lucide-react";

import { statistics } from "@/data/statistics";

import Container from "../ui/Container";

const icons = {
  Building2,
  Users,
  GraduationCap,
  Briefcase,
  HeartHandshake: HandHeart,
  Hospital,
  Route,
  ScrollText,
  Scale,
  Zap,
  MapPinned,
};

export default function Statistics() {
  return (
    <section className="relative z-40 -mt-5 bg-transparent pb-10">
      <Container>
        <div className="overflow-hidden rounded-[26px] bg-green-950 shadow-2xl">
          {/* Gold accent */}
          <div className="h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
            {statistics.map((item) => {
              const Icon =
                icons[item.icon as keyof typeof icons] ?? Building2;

              const numericValue = Number(
                item.value.replace(/[^\d]/g, "")
              );

              const suffix = item.value.replace(/[\d,]/g, "");

              return (
                <article
                  key={item.title}
                  className="
                    group flex min-h-[128px] flex-col items-center justify-center
                    border-b border-r border-green-800
                    px-3 py-5 text-center
                    transition-all duration-300
                    hover:bg-green-900

                    [&:nth-child(2n)]:border-r-0

                    md:[&:nth-child(2n)]:border-r
                    md:[&:nth-child(4n)]:border-r-0
                    md:[&:nth-last-child(-n+4)]:border-b-0

                    xl:border-b-0
                    xl:[&:nth-child(4n)]:border-r
                    xl:[&:last-child]:border-r-0
                  "
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-green-950">
                    <Icon
                      size={25}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-3 text-[29px] font-extrabold leading-none text-white">
                    <CountUp
                      end={numericValue}
                      duration={2}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />

                    {suffix}
                  </div>

                  <p className="mt-2 max-w-[145px] text-xs font-semibold leading-4 !text-green-50">
                    {item.title}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}