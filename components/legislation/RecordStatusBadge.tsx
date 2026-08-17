import type {
  LegislativeStatus,
  LegislativeType,
} from "@/data/legislation";

interface RecordStatusBadgeProps {
  type: LegislativeType;
  status: LegislativeStatus;
}

const typeStyles: Record<LegislativeType, string> = {
  Act:
    "border-green-200 bg-green-50 text-green-800",
  Bill:
    "border-amber-200 bg-amber-50 text-amber-800",
  Motion:
    "border-purple-200 bg-purple-50 text-purple-800",
  Proposal:
    "border-blue-200 bg-blue-50 text-blue-800",
};

const statusStyles: Record<LegislativeStatus, string> = {
  "Presidential Assent":
    "border-green-200 bg-green-50 text-green-800",

  "Passed by Senate":
    "border-blue-200 bg-blue-50 text-blue-800",

  "In Progress":
    "border-amber-200 bg-amber-50 text-amber-800",

  Sponsored:
    "border-purple-200 bg-purple-50 text-purple-800",

  Proposed:
    "border-slate-200 bg-slate-100 text-slate-700",
};

export default function RecordStatusBadge({
  type,
  status,
}: RecordStatusBadgeProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <span
        className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] ${typeStyles[type]}`}
      >
        {type}
      </span>

      <span
        className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] ${statusStyles[status]}`}
      >
        {status}
      </span>
    </div>
  );
}