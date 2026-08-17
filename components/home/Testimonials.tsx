import Image from "next/image";
import {
  MapPin,
  Quote,
} from "lucide-react";

import { testimonials } from "@/data/testimonials";

import PageSection from "../ui/Sections";
import SectionHeader from "../ui/SectionHeader";

export default function Testimonials() {
  return (
    <PageSection className="bg-white">
      <SectionHeader
        badge="Community Voices"
        title="Impact Through the Eyes of Our People"
        description="Selected experiences from beneficiaries and community representatives across Benue South Senatorial District."
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
          >
            {/* Decorative quote icon */}
            <div className="absolute right-6 top-6 text-green-100">
              <Quote
                size={54}
                fill="currentColor"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-4 ring-white shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-green-700">
                    {testimonial.role}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={13} />
                    {testimonial.location}
                  </div>
                </div>
              </div>

              <blockquote className="mt-7 text-[17px] leading-8 text-slate-700">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-7 h-px bg-slate-200" />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Constituency Testimonial
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}