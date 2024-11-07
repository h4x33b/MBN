import { Metadata } from "next";
import { names } from "@/lib/data";
import { NameCard } from "@/components/ui/name-card";
import { notFound } from "next/navigation";
import type { Gender } from "@/lib/types";

interface GenderPageProps {
  params: {
    gender: string;
  };
}

export async function generateMetadata({ params }: GenderPageProps): Promise<Metadata> {
  const gender = params.gender.charAt(0).toUpperCase() + params.gender.slice(1);
  
  if (gender !== "Boy" && gender !== "Girl") {
    return notFound();
  }

  return {
    title: `Muslim ${gender} Names - Meanings & Origins | Muslim Baby Names`,
    description: `Explore beautiful Muslim ${gender.toLowerCase()} names with meanings, origins, and cultural significance. Find the perfect name for your baby.`,
  };
}

export default function GenderPage({ params }: GenderPageProps) {
  const gender = params.gender.charAt(0).toUpperCase() + params.gender.slice(1) as Gender;
  
  if (gender !== "Boy" && gender !== "Girl") {
    return notFound();
  }

  const filteredNames = names.filter((name) => name.Gender === gender);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Muslim {gender} Names</h1>
      <p className="text-muted-foreground mb-8">
        Explore our collection of beautiful Muslim {gender.toLowerCase()} names, complete with meanings,
        origins, and cultural significance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNames.map((name) => (
          <NameCard key={name.Name} name={name} />
        ))}
      </div>
    </div>
  );
}