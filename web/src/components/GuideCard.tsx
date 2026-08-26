import type { Guide } from "@/data/guides";

type GuideCardProps = {
  guide: Guide;
};

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="rounded-lg border border-stone-200 bg-(--surface) p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
        {guide.role}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-(--ink)">{guide.name}</h3>

      <p className="mt-4 text-(--muted)">{guide.bio}</p>

      <p className="mt-6 text-sm font-semibold text-(--ink)">
        Specialty: {guide.specialty}
      </p>

      <p className="mt-2 text-sm text-(--muted)">Based in: {guide.homeBase}</p>

      <p className="mt-2 text-sm text-(--muted)">
        Specialist destinations: {guide.specialistDestinations.join(", ")}
      </p>

    </article>
  );
}
