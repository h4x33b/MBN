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
  FamousPeople: string[];
  CulturalSignificance: string;
  NumerologyTraits: string;
  AstrologyCompatibility: string[];
  NameVariations: string[];
  PersonalityTraits: string[];
  NamePopularityByRegion: {
    US: number;
    UK: number;
    Canada: number;
  };
  SiblingNameIdeas: string[];
  seoTitle: string;
  seoDescription: string;
}

export type Gender = 'Boy' | 'Girl' | 'Unisex';