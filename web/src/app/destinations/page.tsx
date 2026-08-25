import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore bespoke travel experiences in destinations chosen for your interests.",
};


export default function DestinationsPage() {
  return (
    <main>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Plan your experience
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Explore our destinations
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Choose a private experience, then tailor the pace and details with
              your destination specialist.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
