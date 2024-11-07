"use client";

import { useSearchParams } from "next/navigation";
import { names } from "@/lib/data";
import { NameCard } from "@/components/ui/name-card";
import { Search } from "@/components/ui/search";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredNames = names.filter((name) => {
    const searchStr = `${name.Name} ${name.Meaning} ${name.Origin}`.toLowerCase();
    return searchStr.includes(query.toLowerCase());
  });

  return (
    <div className="container py-8">
      <div className="max-w-xl mx-auto mb-8">
        <Search />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h1>
      
      {filteredNames.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No names found matching your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.map((name) => (
            <NameCard key={name.Name} name={name} />
          ))}
        </div>
      )}
    </div>
  );
}