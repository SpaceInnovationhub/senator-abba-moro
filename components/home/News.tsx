import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { news } from "@/data/news";

import NewsCard from "./NewsCard";
import Section from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";

export default function News() {
  const featured = news.find(
    (item) => item.featured
  );

  const others = news.filter(
    (item) => !item.featured
  );

  return (
    <Section className="bg-white">
      <SectionHeader
        badge="Latest Updates"
        title="News & Press Releases"
        description="Stay informed about constituency activities, legislative engagements and community programmes."
        align="center"
      />

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]">
        {featured && (
          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
            <div className="relative h-[300px] overflow-hidden sm:h-[420px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {featured.category}
                </span>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays size={17} />
                  {featured.date}
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                {featured.excerpt}
              </p>

              <Link
                href={`/news/${featured.id}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 transition hover:gap-3"
              >
                Read Full Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        )}

        <div className="space-y-5">
          {others.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}