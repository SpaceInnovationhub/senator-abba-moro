import Section from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";
import LGACard from "./LGACard";
import { lgas } from "@/data/lgas";

export default function Constituency() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        badge="Benue South"
        title="Our Constituency"
        description="Benue South Senatorial District comprises nine Local Government Areas. Explore the communities and constituency projects across the district."
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {lgas.map((lga) => (
          <LGACard key={lga.id} lga={lga} />
        ))}
      </div>
    </Section>
  );
}