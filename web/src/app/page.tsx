import Link from "next/link";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";



export default function Home() {
  return (
    <main>
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Private destination specialists
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Discover [Destination] with [Business Name].
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Personal travel experiences shaped around the places, stories, and
            moments that matter to you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/destinations"
              className="rounded-md bg-amber-300 px-5 py-3 font-semibold text-slate-900"
            >
              Explore destinations
            </Link>

            <Link
              href="/guides"
              className="rounded-md border border-white px-5 py-3 font-semibold"
            >
              Meet the guides
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Explore with us
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Featured destinations
              </h2>
            </div>

            <Link
              href="/destinations"
              className="font-semibold text-slate-900 underline"
            >
              View all destinations
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Your travel specialist
          </p>

          <h2 className="mt-2 text-3xl font-bold">Meet your guide</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Every experience is personal, flexible, and shaped by specialist destination expertise.
          </p>

          <div className="mt-8 max-w-2xl">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>

          <Link
            href="/guides"
            className="mt-8 inline-block font-semibold text-amber-300 underline"
          >
            Learn more about our guides
          </Link>
        </div>
      </section>
      <section className="bg-amber-300 px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to plan your private experience?
          </h2>

          <p className="mt-4 text-lg text-slate-800">
            Tell us what you would like to explore and we&apos;ll help shape the right day.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-slate-900 px-5 py-3 font-semibold text-white"
          >
            Contact us
          </Link>
        </div>
      </section>

    </main>
  );
}
