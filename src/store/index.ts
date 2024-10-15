import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import favoritesReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
