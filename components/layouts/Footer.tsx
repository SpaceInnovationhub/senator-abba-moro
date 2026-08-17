import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Container from "../ui/Container";

const quickLinks = [
  { name: "About the Senator", href: "/about" },
  { name: "Constituency Projects", href: "/projects" },
  { name: "Legislative Work", href: "/legislative-work" },
  { name: "News & Updates", href: "/news" },
  { name: "Opportunities", href: "/opportunities" },
];

const resources = [
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Downloads", href: "/downloads" },
  { name: "Constituency Feedback", href: "/feedback" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "X",
    href: "#",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] xl:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/images/logos/senate-logo.png"
                alt="Nigerian Senate logo"
                width={68}
                height={68}
                className="h-[68px] w-[68px] object-contain"
              />

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                  Senator
                </p>

                <p className="mt-1 text-2xl font-extrabold">
                  Abba Moro
                </p>

                <p className="mt-1 text-sm text-green-100/65">
                  Benue South Senatorial District
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-green-50/70">
              Providing public information on constituency projects,
              legislative activities, community engagements and opportunities
              across Benue South.
            </p>

            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400 hover:text-green-950"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
              Quick Links
            </h3>

            <nav className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-green-50/70 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
              Public Resources
            </h3>

            <nav className="mt-6 flex flex-col gap-3">
              {resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-green-50/70 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5 text-sm text-green-50/70">
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-amber-300"
                />

                <p className="leading-6">
                  Benue South Constituency Office,
                  <br />
                  Otukpo, Benue State
                </p>
              </div>

              <a
                href="mailto:info@abbamoro.ng"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail
                  size={19}
                  className="shrink-0 text-amber-300"
                />
                info@abbamoro.ng
              </a>

              <a
                href="tel:+2347035449791"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-amber-300"
                />
                +234 703 544 9791
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-xs text-green-50/55 sm:text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Senator Abba Moro Constituency
            Portal. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              href="/accessibility"
              className="transition hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}