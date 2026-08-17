import Image from "next/image";
import { MapPin } from "lucide-react";
import { LGA } from "@/types/constituency";

interface Props {
  lga: LGA;
}

export default function LGACard({ lga }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56">
        <Image
          src={lga.image}
          alt={lga.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {lga.name} LGA
        </h3>

        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <MapPin size={18} />
          Headquarters: {lga.headquarters}
        </div>

        <p className="mt-5 leading-7 text-gray-600">
          {lga.description}
        </p>

        <div className="mt-6 rounded-xl bg-green-50 p-4">
          <span className="font-bold text-green-700">
            {lga.projects}
          </span>{" "}
          constituency projects
        </div>
      </div>
    </article>
  );
}