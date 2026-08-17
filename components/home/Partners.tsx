import Image from "next/image";

import { partners } from "@/data/partners";

import PageSection from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";

export default function Partners() {
  return (
    <PageSection className="bg-slate-50">
      <SectionHeader
        badge="Institutional Engagement"
        title="Working Across Government and Public Institutions"
        description="Constituency development requires coordination across institutions, agencies and public-sector stakeholders."
        align="center"
      />

      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
        <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-3 xl:grid-cols-5 xl:divide-y-0">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex min-h-[190px] flex-col items-center justify-center p-7 text-center transition-colors hover:bg-green-50"
            >
              <div className="relative h-20 w-20 grayscale transition-all duration-300 group-hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <p className="mt-5 max-w-[180px] text-sm font-semibold leading-6 text-slate-700">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}