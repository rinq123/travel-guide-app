import Link from "next/link";
import type { Destination } from "@/data/destinations";


type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
    >
      <article className="h-full rounded-lg border border-stone-200 bg-(--surface) p-6 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
        <p className="text-sm font-semibold text-(--accent)">
          {destination.duration}
        </p>

        <h3 className="mt-3 text-xl font-bold text-(--ink)">
          {destination.name}
        </h3>

        <p className="mt-3 text-(--muted)">{destination.description}</p>

        <p className="mt-6 flex items-center gap-2 font-semibold text-(--ink)">
          Explore destination
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </p>
      </article>
    </Link>
  );
}