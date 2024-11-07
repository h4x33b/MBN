import { Metadata } from "next";
import { names } from "@/lib/data";
import { NameCard } from "@/components/ui/name-card";

export const metadata: Metadata = {
  title: "Popular Muslim Baby Names | Most Loved Names with Meanings",
  description: "Discover the most popular Muslim baby names. Explore trending names with their meanings, origins, and cultural significance.",
};

export default function PopularPage() {
  const popularNames = [...names]
    .sort((a, b) => a.PopularityRank - b.PopularityRank)
    .slice(0, 12);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Popular Muslim Baby Names</h1>
      <p className="text-muted-foreground mb-8">
        Explore our collection of the most popular Muslim baby names, ranked by popularity
        across different regions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularNames.map((name) => (
          <NameCard key={name.Name} name={name} />
        ))}
      </div>
    </div>
  );
}