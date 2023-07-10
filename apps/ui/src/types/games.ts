export type Game = {
  developer: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  releaseDate: string;
  shortDescription: string;
  thumbnail: string;
  title: string;
};

type MinimalSystemRequirements = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

export type Screenshot = {
  id: number;
  image: string;
};

export type SingleGame = Game & {
  description: string;  
  screenshots: Screenshot[];
  status: string;
  minimumSystemRequirements?: MinimalSystemRequirements;
};
