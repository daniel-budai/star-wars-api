export interface Person {
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  homeworld: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
}

export type FavoriteItem = Person | Planet; // Change from union to intersection

export type Favorite = FavoriteItem & {
  category: "people" | "planets";
  isCustom?: boolean;
};
