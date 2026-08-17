import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  FileText,
  GraduationCap,
  ImageIcon,
  MessageCircle,
} from "lucide-react";

const actions = [
  {
    title: "Legislative Work",
    description: "Bills, motions, debates and more",
    href: "/legislative-work",
    icon: FileText,
  },
  {
    title: "Opportunities",
    description: "Scholarships, grants, skills & more",
    href: "/opportunities",
    icon: GraduationCap,
  },
  {
    title: "Events",
    description: "Upcoming events and community activities",
    href: "/events",
    icon: CalendarDays,
  },
  {
    title: "Gallery",
    description: "Photos and videos of our activities",
    href: "/gallery",
    icon: ImageIcon,
  },
  {
    title: "Constituency Feedback",
    description: "Share your concerns and suggestions",
    href: "/feedback",
    icon: MessageCircle,
  },
];

export default function QuickActions() {
  return (
    <section className="bg-slate-50 pb-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1.25fr]">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
                className="group flex min-h-[105px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <Icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-green-950">
                    {action.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">
                    {action.description}
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="shrink-0 text-green-700 transition group-hover:translate-x-1"
                />
              </Link>
            );
          })}

          <div className="flex min-h-[105px] items-center justify-between gap-4 rounded-2xl bg-green-800 p-5 text-white shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
                Have a concern or suggestion?
              </p>

              <p className="mt-1 text-xs leading-5 text-green-50/80">
                Reach out to us. Your voice matters.
              </p>

              <Link
                href="/feedback"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-green-950 transition hover:bg-amber-300"
              >
                Submit Feedback
                <ArrowRight size={14} />
              </Link>
            </div>

            <MessageCircle
              size={46}
              className="shrink-0 text-amber-300"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}