import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import Container from "../ui/Container";

export default function ContactBanner() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <Container>
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              Constituency Engagement
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Your voice matters in the development of Benue South
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-green-50/80 sm:text-lg">
              Share a concern, submit a project suggestion, request
              constituency assistance or contact the office directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/feedback"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-amber-400 px-7 font-bold text-green-950 transition hover:bg-amber-300"
            >
              <MessageCircle size={20} />
              Submit Feedback
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/35 bg-white/5 px-7 font-bold text-white transition hover:bg-white/10"
            >
              Contact the Office
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}