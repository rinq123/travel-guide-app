import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "[Business Name]",
    template: "%s | [Business Name]",
  },
  description: "Bespoke travel experiences with destination specialists.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-stone-200 bg-(--surface)">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4"
          >
            <Link href="/" className="font-bold tracking-tight text-(--ink)">
              [Business Name]
            </Link>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-(--muted)">
              <Link href="/about" className="rounded-sm transition-colors hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)">About</Link>
              <Link href="/destinations" className="rounded-sm transition-colors hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)">Destinations</Link>
              <Link href="/guides" className="rounded-sm transition-colors hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)">Guides</Link>
              <Link href="/contact" className="rounded-sm transition-colors hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-auto bg-(--ink) px-6 py-8 text-(--canvas)">
          <div className="mx-auto max-w-6xl">
            <p>&copy; 2026 [Business Name]</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
