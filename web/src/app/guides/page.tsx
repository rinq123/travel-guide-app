import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Meet the destination specialists who create tailored travel experiences.",
};


export default function GuidesPage() {
  return (
    <main>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Destination expertise, made personal
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Meet our guides
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Our guides travel with you, combining specialist destination
              knowledge with experiences tailored to your interests.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
