interface Props {
  headquarters: string;
}

export default function LgaQuickFacts({
  headquarters,
}: Props) {
  return (
    <section className="mt-12 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-950">
        Quick Facts
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            Headquarters
          </p>

          <p className="mt-1 text-lg font-bold text-green-900">
            {headquarters}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            Senatorial District
          </p>

          <p className="mt-1 text-lg font-bold text-green-900">
            Benue South
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            State
          </p>

          <p className="mt-1 text-lg font-bold text-green-900">
            Benue
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            Country
          </p>

          <p className="mt-1 text-lg font-bold text-green-900">
            Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}