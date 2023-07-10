import { GameFilters } from "@/types/filters";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  platform: "",
  categories: [],
  sortBy: "",
} as GameFilters;

const gameFiltersSlice = createSlice({
  name: "gameFilters",
  initialState,
  reducers: {
    setPlatform(state, action: PayloadAction<string>) {
      state.platform = action.payload;
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setPlatform, setCategories, setSortBy } =
  gameFiltersSlice.actions;
export default gameFiltersSlice.reducer;
