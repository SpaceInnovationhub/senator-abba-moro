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

export default function TopBar() {
  return (
    <div className="hidden bg-green-950 text-white xl:block">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between gap-6 text-[12px]">
          {/* Left content */}
          <div className="flex min-w-0 items-center gap-4 text-green-50/85">
            <p className="whitespace-nowrap">
              Welcome to the Official Constituency Portal of Senator Abba Moro
            </p>

            <span
              aria-hidden="true"
              className="h-4 w-px shrink-0 bg-white/30"
            />

            <p className="whitespace-nowrap font-medium">
              Serving Benue South Senatorial District
            </p>
          </div>

          {/* Right content */}
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center gap-1.5 whitespace-nowrap text-green-50/85">
              <MapPin
                size={14}
                className="shrink-0 text-amber-300"
              />

              <span>Benue State, Nigeria</span>
            </div>

            <a
              href="mailto:info@abbamoro.ng"
              className="flex items-center gap-1.5 whitespace-nowrap text-green-50/85 transition hover:text-white"
            >
              <Mail
                size={14}
                className="shrink-0 text-amber-300"
              />

              <span>info@abbamoro.ng</span>
            </a>

            <a
              href="tel:+2347035449791"
              className="flex items-center gap-1.5 whitespace-nowrap text-green-50/85 transition hover:text-white"
            >
              <Phone
                size={14}
                className="shrink-0 text-amber-300"
              />

              <span>+234 703 544 9791</span>
            </a>

            <span
              aria-hidden="true"
              className="h-4 w-px shrink-0 bg-white/30"
            />

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-5 w-5 items-center justify-center text-green-50/85 transition hover:text-amber-300"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}