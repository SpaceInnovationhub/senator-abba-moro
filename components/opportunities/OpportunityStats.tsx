import {
  GraduationCap,
  HandHeart,
  Laptop,
  Sprout,
  Users,
} from "lucide-react";

import { getOpportunitySummary } from "@/lib/opportunities";

import Container from "../ui/Container";

export default function OpportunityStats() {
  const stats = getOpportunitySummary();

  const items = [
    {
      label: "Youth Empowerment",
      value: stats.youth,
      icon: Users,
    },
    {
      label: "Women Empowerment",
      value: stats.women,
      icon: HandHeart,
    },
    {
      label: "Scholarships",
      value: stats.scholarships,
      icon: GraduationCap,
    },
    {
      label: "Agriculture Support",
      value: stats.agriculture,
      icon: Sprout,
    },
    {
      label: "ICT Development",
      value: stats.ict,
      icon: Laptop,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 pb-8">
      <Container>
        <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border-b border-slate-200 p-6 sm:border-r xl:border-b-0 xl:last:border-r-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon size={23} />
                </div>

                <p className="mt-5 text-3xl font-extrabold text-green-950">
                  {item.value}
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}