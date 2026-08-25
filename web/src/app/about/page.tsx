import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about [Business Name] and its destination-specialist travel experiences",
};


export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Our story
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Travel experiences with specialist insight
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              [Business Name] creates private travel experiences for people who
              want to explore beyond the usual itinerary.
            </p>
            <p>
              We combine destination expertise with flexible planning, helping
              every visitor discover places, stories, and moments that feel personal.
            </p>
          </div>

          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-2xl font-bold text-slate-900">Our values</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-slate-900">Personal</h3>
                <p className="mt-2 text-slate-600">
                  Each experience begins with what matters to you.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Flexible</h3>
                <p className="mt-2 text-slate-600">
                  Plans can adapt to your interests, pace, and priorities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Destination expertise
                </h3>
                <p className="mt-2 text-slate-600">
                  Recommendations are shaped by specialist destination knowledge.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
