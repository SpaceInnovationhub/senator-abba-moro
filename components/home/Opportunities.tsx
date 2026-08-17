import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Sprout,
} from "lucide-react";

import { opportunities } from "@/data/opportunities";

import PageSection from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";

const icons = {
  Education: GraduationCap,
  Empowerment: BriefcaseBusiness,
  Agriculture: Sprout,
};

export default function Opportunities() {
  return (
    <PageSection className="bg-green-950 text-white">
      <SectionHeader
        badge="Constituency Support"
        title="Opportunities for Our People"
        description="Explore scholarships, skills programmes and empowerment initiatives designed to support residents of Benue South."
        align="center"
        theme="dark"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {opportunities.map((opportunity) => {
          const Icon =
            icons[opportunity.category as keyof typeof icons];

          return (
            <article
              key={opportunity.id}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-green-950">
                <Icon size={28} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wide text-amber-300">
                {opportunity.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {opportunity.title}
              </h3>

              <p className="mt-4 leading-7 text-green-50/80">
                {opportunity.description}
              </p>

              <Link
                href={opportunity.href}
                className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-amber-300 transition hover:gap-3"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}