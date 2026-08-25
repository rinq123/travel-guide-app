import Link from "next/link";
import type { Destination } from "@/data/destinations";


type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-amber-700">
        {destination.duration}
      </p>
      <h3 className="mt-3 text-xl font-bold text-slate-900">
        {destination.name}
      </h3>
      <p className="mt-3 text-slate-600">{destination.description}</p>
      <Link
        href={`/destinations/${destination.slug}`}
        className="mt-6 inline-block font-semibold text-slate-900 underline"
      >
        View destination
      </Link>
    </article>
  );
}