import {
  Archive,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartPulse,
  Landmark,
  Route,
  Sprout,
  Users,
  Waves,
  Zap,
} from "lucide-react";

import Container from "../ui/Container";

interface LgaStatisticsProps {
  stats: {
    total: number;
    completed: number;
    ongoing: number;
    recorded: number;
    budget2026: number;
    planned: number;
    roads: number;
    education: number;
    healthcare: number;
    empowerment: number;
    electrification: number;
    water: number;
    agriculture: number;
  };
}

export default function LgaStatistics({
  stats,
}: LgaStatisticsProps) {
  const items = [
    {
      label: "Projects",
      value: stats.total,
      icon: Building2,
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
    },
    {
      label: "Ongoing",
      value: stats.ongoing,
      icon: Clock3,
    },
    {
      label: "Recorded",
      value: stats.recorded,
      icon: Archive,
    },
    {
      label: "2026 Budget",
      value: stats.budget2026,
      icon: Landmark,
    },
    {
      label: "Roads & Bridges",
      value: stats.roads,
      icon: Route,
    },
    {
      label: "Education",
      value: stats.education,
      icon: GraduationCap,
    },
    {
      label: "Healthcare",
      value: stats.healthcare,
      icon: HeartPulse,
    },
    {
      label: "Empowerment",
      value: stats.empowerment,
      icon: Users,
    },
    {
      label: "Electrification",
      value: stats.electrification,
      icon: Zap,
    },
    {
      label: "Water",
      value: stats.water,
      icon: Waves,
    },
    {
      label: "Agriculture",
      value: stats.agriculture,
      icon: Sprout,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 pb-8">
      <Container>
        <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex min-h-[130px] flex-col items-center justify-center border-b border-r border-slate-200 p-4 text-center"
              >
                <Icon
                  size={23}
                  className="text-green-700"
                />

                <p className="mt-3 text-2xl font-extrabold text-green-950">
                  {item.value}
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-600">
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