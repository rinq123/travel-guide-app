import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start planning a bespoke travel experience with [Business Name]"
};

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Start planning
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Tell us about your next journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share your ideas and we will help shape a personal travel
              experience around your interests, timing, and preferred destination.
            </p>

            <div className="mt-10 rounded-lg border border-stone-200 bg-(--surface) p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                What to include
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                <li>Your preferred destination or type of experience</li>
                <li>Your possible travel dates and group size</li>
                <li>Your interests and preferred pace</li>
                <li>Your approximate trip budget</li>
              </ul>
            </div>
          </div>

          <aside className="rounded-lg bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold">Contact details</h2>
            <p className="mt-4 text-slate-300">
              Our online enquiry form will be added in a later build phase. For
              now, replace these placeholders with the approved business contact
              details.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                  Email
                </dt>
                <dd className="mt-2 text-lg">[Business email]</dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                  Phone
                </dt>
                <dd className="mt-2 text-lg">[Business phone number]</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
