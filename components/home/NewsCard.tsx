import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

import type { News } from "@/types";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({
  news,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      <Link
        href={`/news/${news.id}`}
        className="grid grid-cols-[120px_1fr] gap-4 p-4 sm:grid-cols-[150px_1fr]"
      >
        <div className="relative min-h-[120px] overflow-hidden rounded-xl">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="150px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0">
          <span className="text-xs font-bold uppercase tracking-wide text-green-700">
            {news.category}
          </span>

          <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-slate-950 sm:text-lg">
            {news.title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} />
            <span>{news.date}</span>
          </div>

          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-700">
            Read more
            <ArrowRight size={15} />
          </span>
        </div>
      </Link>
    </article>
  );
}