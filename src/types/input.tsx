export interface Fantasy {
  id: number;
  img: string;
  title: string;
  description: string;
  plays: number;
  likes: number;
}

export interface FantasyCollection {
  fantasies: Fantasy[];
}

export interface Character {
  id: number;
  img: string;
  name: string;
  description: string;
}

export interface RolePlaySectionType {
  characters: Character[];
  categories: string[];
}

export interface Feature {
  id: number;
  img1: string;
  img2: string;
  img3: string;
  feature: string;
  description: string;
}

export interface FeatureCollection {
  features: Feature[];
}

export interface Voice {
  id: number;
  avatar: string;
  voice: string;
}

export interface VoiceCollection {
  voices: Voice[];
}

export interface CharacterCardType extends Character {
  isHero: boolean;
}
