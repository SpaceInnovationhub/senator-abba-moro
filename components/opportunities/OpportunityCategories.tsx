import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  HandHeart,
  Laptop,
  Sprout,
  Users,
} from "lucide-react";

import Container from "../ui/Container";

const categories = [
  {
    title: "Youth Empowerment",
    description:
      "ICT training, entrepreneurship support, mobility interventions, technical skills, sports and skills acquisition programmes.",
    href: "/projects?category=Youth%20Empowerment",
    icon: Users,
  },
  {
    title: "Women Empowerment",
    description:
      "Enterprise support, vocational equipment, economic empowerment, grants and business development interventions.",
    href: "/projects?category=Women%20Empowerment",
    icon: HandHeart,
  },
  {
    title: "Scholarships",
    description:
      "Educational support and scholarship interventions designed to expand access to learning opportunities.",
    href: "/projects?category=Scholarships",
    icon: GraduationCap,
  },
  {
    title: "Agriculture & Farmers Support",
    description:
      "Agricultural inputs, equipment, livestock support, value-chain training and farmers' empowerment.",
    href: "/projects?category=Agriculture",
    icon: Sprout,
  },
  {
    title: "ICT & Digital Skills",
    description:
      "Technology training, laptop distribution and digital-skills development interventions.",
    href: "/projects?category=ICT",
    icon: Laptop,
  },
];

export default function OpportunityCategories() {
  return (
    <section
      id="opportunities"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
            Opportunity Areas
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Explore empowerment and human-capital interventions
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse constituency interventions by opportunity area and
            discover programmes relevant to youth, women, students,
            entrepreneurs and farmers.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <Link
                  href={category.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition group-hover:gap-3"
                >
                  Explore interventions
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}