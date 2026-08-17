import Link from "next/link";

import {
  Flag,
  MessageCircle,
  Share2,
} from "lucide-react";

import type { IntelligenceProject } from "@/types/projects";

interface ProjectEngagementProps {
  project: IntelligenceProject;
}

export default function ProjectEngagement({
  project,
}: ProjectEngagementProps) {
  const encodedTitle = encodeURIComponent(project.title);

  return (
    <section className="mt-12 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
            Community Engagement
          </p>

          <h2 className="mt-3 text-2xl font-extrabold text-slate-950">
            Share information or submit project feedback
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Constituents can share this project, report an implementation
            concern or submit verified community feedback.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`https://wa.me/?text=${encodedTitle}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <Share2 size={17} />
            Share Project
          </a>

          <Link
            href={`/feedback?project=${project.slug}`}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-green-700 px-5 text-sm font-bold text-white transition hover:bg-green-800"
          >
            <MessageCircle size={17} />
            Submit Feedback
          </Link>

          <Link
            href={`/feedback?type=report&project=${project.slug}`}
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 text-sm font-bold text-red-700 transition hover:bg-red-100"
          >
            <Flag size={17} />
            Report Concern
          </Link>
        </div>
      </div>
    </section>
  );
}