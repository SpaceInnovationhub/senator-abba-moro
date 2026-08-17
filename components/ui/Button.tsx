import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  title: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  title,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "inline-flex h-14 items-center justify-center gap-3 rounded-xl px-8 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-green-700 text-white shadow-lg hover:bg-green-800 hover:-translate-y-1",
    secondary:
      "border-2 border-green-700 bg-white text-green-700 hover:bg-green-50 hover:-translate-y-1",
  };

  return (
    <Link
      href={href}
      className={`${baseStyle} ${styles[variant]}`}
    >
      {title}
      <ArrowRight size={20} />
    </Link>
  );
}