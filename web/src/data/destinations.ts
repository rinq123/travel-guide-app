export type Destination = {
  slug: string;
  name: string;
  description: string;
  duration: string;
};

export const destinations: Destination[] = [
  {
    slug: "old-town",
    name: "Old Town Highlights",
    description:
      "A relaxed introduction to historic streets, cultural stories, and hidden corners.",
    duration: "3 hours",
  },
  {
    slug: "coastal-walk",
    name: "Coastal Walk",
    description:
      "A scenic private route with viewpoints, food stops, and time to explore.",
    duration: "4 hours",
  },
  {
    slug: "food-experience",
    name: "Food Experience",
    description:
      "Discover favourite cafes, markets, and dishes with a specialist destination guide.",
    duration: "3 hours",
  },
];
