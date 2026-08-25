import type { Guide } from "@/data/guides";

type GuideCardProps = {
  guide: Guide;
};

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="rounded-lg bg-slate-100 p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
        {guide.role}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-slate-900">{guide.name}</h3>

      <p className="mt-4 text-slate-600">{guide.bio}</p>

      <p className="mt-6 text-sm font-semibold text-slate-900">
        Specialty: {guide.specialty}
      </p>
      <p className="mt-2 text-sm text-slate-600">Based in: {guide.homeBase}</p>
      <p className="mt-2 text-sm text-slate-600">
        Specialist destinations: {guide.specialistDestinations.join(", ")}
      </p>
    </article>
  );
}
