export type Guide = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
  homeBase: string;
  specialistDestinations: string[];
};

export const guides: Guide[] = [
  {
    slug: "alex-morgan",
    name: "Alex Morgan",
    role: "Destination History Specialist",
    bio: "Based in the UK, Alex travels with clients to create thoughtful experiences shaped around the history and culture of each destination.",
    specialty: "History and culture",
    homeBase: "United Kingdom",
    specialistDestinations: ["South Africa"],
  },
];
