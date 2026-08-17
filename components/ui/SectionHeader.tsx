interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeaderProps) {
  const centered = align === "center";
  const darkTheme = theme === "dark";

  return (
    <div
      className={`mb-12 ${
        centered
          ? "mx-auto max-w-4xl text-center"
          : "max-w-3xl"
      }`}
    >
      {badge && (
        <span
          className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
            darkTheme
              ? "bg-white/10 text-amber-300"
              : "bg-green-100 text-green-700"
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          darkTheme ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
            darkTheme
              ? "text-green-50/80"
              : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}