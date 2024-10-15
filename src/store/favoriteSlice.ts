import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorite } from "../types";

interface FavoritesState {
  items: Favorite[];
  selectedCategory: "all" | "people" | "planets";
}

const initialState: FavoritesState = {
  items: [],
  selectedCategory: "all",
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      if (!state.items.some((fav) => fav.name === action.payload.name)) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<Favorite>) => {
      state.items = state.items.filter(
        (fav) => fav.name !== action.payload.name
      );
    },
    setSelectedCategory: (
      state,
      action: PayloadAction<"all" | "people" | "planets">
    ) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setSelectedCategory } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
