import { BASE_API_URL } from "@/config";
import { GameFilters } from "@/types/filters";
import { Game, SingleGame } from "@/types/games";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const buildFiltersPath = (filters: GameFilters) => {
  const { categories = [], platform = "all", sortBy } = filters;
  const filtersPathArr = [];

  if (platform) {
    filtersPathArr.push(`platform=${platform}`);
  }

  if (categories.length) {
    filtersPathArr.push(
      categories.length === 1
        ? `&category=${categories[0]}`
        : `&tag=${categories.join(".")}`
    );
  }

  if (sortBy) {
    filtersPathArr.push(`&sort-by=${sortBy}`);
  }

  return filtersPathArr.join("&");
};

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getAllGames: builder.query<Game[], GameFilters>({
      query: (filters) => `games?${buildFiltersPath(filters)}`,
    }),
    getGame: builder.query<SingleGame, number>({
      query: (id) => `game?id=${id}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "categories",
    }),
    filterGames: builder.query<Game[], GameFilters>({
      query: (filters) => `filter?${buildFiltersPath(filters)}`,
    }),
  }),
});

export const { useGetAllGamesQuery, useGetGameQuery, useGetCategoriesQuery, useFilterGamesQuery } =
  gamesApi;
