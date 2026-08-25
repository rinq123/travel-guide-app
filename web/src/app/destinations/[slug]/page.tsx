import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import type { Metadata } from "next";

export function generateStaticParams() {
    return destinations.map((destination) => ({
        slug: destination.slug,
    }));
}

export async function generateMetadata(
    props: PageProps<"/destinations/[slug]">,
): Promise<Metadata> {
    const { slug } = await props.params;

    const destination = destinations.find(
        (destination) => destination.slug === slug,
    );

    if(!destination) {
        return{
            title: "Destination not found",
        };
    }

    return {
        title: destination.name,
        description: destination.description,
    };
}

export default async function DestinationDetailPage(
    props: PageProps<"/destinations/[slug]">,
) {
    const { slug } = await props.params;

    const destination = destinations.find(
        (destination) => destination.slug === slug,
    );
    if (!destination) {
        notFound();
    }


    return (
        <main className="px-6 py-16">
            <article className="mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                    Private experience - {destination.duration}
                </p>

                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {destination.name}
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    {destination.description}
                </p>

                <Link
                    href="/destinations"
                    className="mt-10 inline-block font-semibold text-slate-900 underline"
                >
                    Back to all destinations
                </Link>
            </article>
        </main>
    );
}
