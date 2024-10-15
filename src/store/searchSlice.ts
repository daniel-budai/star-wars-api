import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { searchPeople, searchPlanets } from "../api";
import { Person, Planet } from "../types";

interface SearchState {
  results: (Person | Planet)[];
  category: "people" | "planets";
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  category: "people",
  isLoading: false,
  error: null,
};

export const performSearch = createAsyncThunk(
  "search/performSearch",
  async ({
    query,
    category,
  }: {
    query: string;
    category: "people" | "planets";
  }) => {
    if (category === "people") {
      return await searchPeople(query);
    } else {
      return await searchPlanets(query);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<"people" | "planets">) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const { setCategory } = searchSlice.actions;
export default searchSlice.reducer;
