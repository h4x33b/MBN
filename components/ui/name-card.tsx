"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BabyName } from "@/lib/types";

interface NameCardProps {
  name: BabyName;
}

export function NameCard({ name }: NameCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <Link 
            href={`/name/${name.Name.toLowerCase()}`}
            className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            {name.Name}
          </Link>
          <div className="flex items-center gap-2">
            <Badge variant={name.Gender === 'Boy' ? 'default' : 'secondary'}>
              {name.Gender}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {name.Origin}
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{name.Meaning}</p>
        <div className="flex flex-wrap gap-2">
          {name.PersonalityTraits.slice(0, 3).map((trait) => (
            <Badge key={trait} variant="outline">
              {trait}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}