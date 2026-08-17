import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===================================================== */}
      {/* BACKGROUND COMPOSITION */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Civic landscape — LEFT */}
        <div className="absolute inset-y-0 left-0 w-full overflow-hidden lg:w-[64%]">
          <Image
            src="/images/hero/benue-civic.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-cover object-left-center"
            aria-hidden="true"
          />

          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/28" />

          {/* Preserve scenery on far left, soften beneath text */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/82 to-white" />
        </div>

        {/* Nigerian flag — RIGHT */}
        <div className="absolute inset-y-0 right-0 hidden w-[49%] overflow-hidden lg:block">
          <Image
            src="/images/hero/nigeria-flag.jpg"
            alt=""
            fill
            priority
            sizes="49vw"
            className="object-cover object-center"
            aria-hidden="true"
          />

          {/* Reduce visual competition behind portrait */}
          <div className="absolute inset-0 bg-white/8" />

          {/* Blend flag gently into centre */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent" />
        </div>

        {/* Central transition zone */}
        <div className="absolute inset-y-0 left-[48%] hidden w-[18%] bg-gradient-to-r from-white via-white/75 to-transparent lg:block" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/85 to-transparent" />
      </div>

      {/* Soft glow behind portrait */}
      <div className="pointer-events-none absolute right-[4%] top-[10%] hidden h-[520px] w-[520px] rounded-full bg-green-400/15 blur-3xl lg:block" />

      <Container>
        <div className="relative grid min-h-[620px] items-center gap-8 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:py-0">
          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <div className="relative z-20 max-w-[690px] py-4 lg:py-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-green-100/95 px-5 py-3 text-sm font-bold text-green-700 shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
              Constituency Service Portal
            </div>

            <h1 className="mt-7 text-[43px] font-extrabold leading-[0.99] tracking-[-0.045em] text-green-950 sm:text-[55px] lg:text-[58px] xl:text-[64px]">
              <span className="block">
                Building a Stronger
              </span>

              <span className="mt-2 block text-amber-500">
                Benue South
              </span>

              <span className="mt-2 block">
                Through Effective
              </span>

              <span className="mt-2 block">
                Representation
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] text-base leading-8 text-slate-700 sm:text-lg">
              Welcome to the official constituency portal of Senator Abba
              Moro. Stay informed about legislative activities, constituency
              projects, empowerment programmes, scholarships and community
              development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-green-700 px-8 font-bold !text-white shadow-lg transition hover:bg-green-800 hover:!text-white"
              >
                <span className="text-white">
                  Explore Projects
                </span>

                <ArrowRight
                  size={20}
                  className="text-white"
                />
              </Link>

              <Link
                href="/news"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border-2 border-green-700 bg-white/95 px-8 font-bold text-slate-900 shadow-sm backdrop-blur transition hover:bg-green-50"
              >
                Latest News
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT CONTENT */}
          {/* ===================================================== */}

          <div className="relative z-20 flex min-h-[510px] items-end justify-center lg:min-h-[620px]">
            {/* Gold seal */}
            <Image
              src="/images/hero/seal.png"
              alt="Service, Leadership, Impact"
              width={175}
              height={175}
              priority
              className="
                absolute
                top-8
                right-[-10px]
                z-30
                h-auto
                w-[125px]
                drop-shadow-2xl
                sm:right-[-12px]
                sm:w-[140px]
                xl:right-[-18px]
                xl:w-[155px]
              "
            />

            {/* Senator portrait */}
            <div className="relative z-30 flex h-full w-full items-end justify-center">
              <Image
                src="/images/hero/senator.png"
                alt="Senator Abba Moro"
                width={820}
                height={900}
                priority
                className="
                  h-auto
                  w-auto
                  max-w-[115%]
                  object-contain
                  drop-shadow-[0_24px_32px_rgba(0,0,0,0.2)]

                  max-h-[560px]
                  sm:max-h-[600px]
                  lg:max-h-[620px]
                  lg:max-w-[128%]
                  lg:-translate-y-1
                  xl:max-h-[655px]
                  xl:max-w-[135%]
                  xl:-translate-y-3
                "
              />
            </div>

            {/* Verified badge */}
            <div className="absolute bottom-14 left-0 z-50 sm:left-6 lg:bottom-16 lg:-left-2 xl:left-1">
              <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 text-green-700"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.25 20 5.8v5.75c0 5.05-3.4 9.37-8 10.2-4.6-.83-8-5.15-8-10.2V5.8L12 2.25Z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="m7 12 3 3 7-7" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-green-700">
                    Verified
                  </p>

                  <p className="mt-0.5 whitespace-nowrap text-sm font-bold text-slate-900">
                    Constituency Portal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}