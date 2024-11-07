export interface BabyName {
  Name: string;
  Meaning: string;
  Origin: string;
  Gender: 'Boy' | 'Girl' | 'Unisex';
  LuckyNumber: number;
  Religion: string;
  NameLength: string;
  PopularityRank: number;
  Pronunciation: string;
  FamousPeople: readonly string[]; // Update to readonly array
  CulturalSignificance: string;
  NumerologyTraits: string;
  AstrologyCompatibility: readonly string[];
  NameVariations: readonly string[];
  PersonalityTraits: readonly string[];
  NamePopularityByRegion: {
    US: number;
    UK: number;
    Canada: number;
  };
  SiblingNameIdeas: readonly string[];
  seoTitle: string;
  seoDescription: string;
}

export type Gender = 'Boy' | 'Girl' | 'Unisex';
