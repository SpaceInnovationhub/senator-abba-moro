import { Inbox } from "lucide-react";

interface Props {
  title: string;
  message: string;
}

export default function EmptyState({
  title,
  message,
}: Props) {
  return (
    <div className="rounded-3xl border border-dashed border-gray-300 p-16 text-center">
      <Inbox
        size={60}
        className="mx-auto text-gray-400"
      />

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-500">
        {message}
      </p>
    </div>
  );
}