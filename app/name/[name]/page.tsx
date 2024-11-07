import { Metadata } from "next";
import { names } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, Users } from "lucide-react";

interface NamePageProps {
  params: {
    name: string;
  };
}

export async function generateMetadata({ params }: NamePageProps): Promise<Metadata> {
  const name = names.find(
    (n) => n.Name.toLowerCase() === params.name.toLowerCase()
  );

  if (!name) {
    return notFound();
  }

  return {
    title: name.seoTitle,
    description: name.seoDescription,
  };
}

export default function NamePage({ params }: NamePageProps) {
  const name = names.find(
    (n) => n.Name.toLowerCase() === params.name.toLowerCase()
  );

  if (!name) {
    return notFound();
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{name.Name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <Badge variant={name.Gender === "Boy" ? "default" : "secondary"}>
              {name.Gender}
            </Badge>
            <span className="text-sm text-muted-foreground">{name.Origin}</span>
            <span className="text-sm text-muted-foreground">
              Pronunciation: {name.Pronunciation}
            </span>
          </div>

          <Tabs defaultValue="meaning" className="space-y-4">
            <TabsList>
              <TabsTrigger value="meaning">Meaning</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="popularity">Popularity</TabsTrigger>
            </TabsList>

            <TabsContent value="meaning" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Meaning & Significance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{name.Meaning}</p>
                  <p className="text-muted-foreground">{name.CulturalSignificance}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personality Traits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {name.PersonalityTraits.map((trait) => (
                      <Badge key={trait} variant="outline">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Name Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Famous People</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {name.FamousPeople.map((person) => (
                        <li key={person}>{person}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Name Variations</h4>
                    <div className="flex flex-wrap gap-2">
                      {name.NameVariations.map((variation) => (
                        <Badge key={variation} variant="outline">
                          {variation}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Numerology & Astrology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lucky Number</h4>
                    <p className="text-muted-foreground">{name.LuckyNumber}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Astrology Compatibility</h4>
                    <div className="flex flex-wrap gap-2">
                      {name.AstrologyCompatibility.map((sign) => (
                        <Badge key={sign} variant="outline">
                          {sign}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="popularity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Popularity by Region</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>United States</span>
                      <span>Rank #{name.NamePopularityByRegion.US}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>United Kingdom</span>
                      <span>Rank #{name.NamePopularityByRegion.UK}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Canada</span>
                      <span>Rank #{name.NamePopularityByRegion.Canada}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Similar Names</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {name.SiblingNameIdeas.map((siblingName) => (
                  <div
                    key={siblingName}
                    className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <span>{siblingName}</span>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}