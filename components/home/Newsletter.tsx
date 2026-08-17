"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import Container from "../ui/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="bg-amber-400 py-14 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-950 text-white shadow-sm">
              <Mail size={26} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-green-900">
              Constituency Updates
            </p>

            <h2 className="mt-2 max-w-2xl text-3xl font-extrabold leading-tight text-green-950 sm:text-4xl">
              Stay informed about developments across Benue South
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-green-950/75 sm:text-lg">
              Receive project updates, legislative information, public
              announcements and constituency opportunities directly by email.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 text-green-800 shadow-lg">
                <CheckCircle2
                  size={24}
                  className="mt-0.5 shrink-0"
                />

                <div>
                  <p className="font-bold">
                    Subscription received
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Thank you for subscribing to constituency updates.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[24px] bg-white p-3 shadow-xl"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label
                    htmlFor="newsletter-email"
                    className="sr-only"
                  >
                    Email address
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Enter your email address"
                    className="h-14 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-green-700 focus:ring-2 focus:ring-green-700/15"
                  />

                  <button
                    type="submit"
                    className="h-14 rounded-xl bg-green-950 px-7 font-bold text-white transition hover:bg-green-800"
                  >
                    Subscribe
                  </button>
                </div>

                <p className="px-2 pt-3 text-xs leading-5 text-slate-500">
                  By subscribing, you agree to receive constituency
                  information and public updates.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}