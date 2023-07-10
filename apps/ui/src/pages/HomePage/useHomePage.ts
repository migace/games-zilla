import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";
import { useFilterGamesQuery, useGetAllGamesQuery } from "@/services/games";
import { Game } from "@/types/games";
import { useAppSelector } from "@/hooks/useAppSelector";

export const useHomePage = () => {
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const filters = useAppSelector((state) => state.gameFilters);
  const {
    data: games = [],
    isLoading: isGamesLoading,
    isFetching: isGamesFetching,
  } = useGetAllGamesQuery(filters, { skip: filters.categories.length > 1 });
  const {
    data: filterGames = [],
    isLoading: isFilterGamesLoading,
    isFetching: isFilterGamesFetching,
  } = useFilterGamesQuery(filters, { skip: filters.categories.length <= 1 });
  const isLoading =
    isGamesLoading ||
    isGamesFetching ||
    isFilterGamesLoading ||
    isFilterGamesFetching;

  const debouncedSearchGamesAction = useMemo(
    () =>
      debounce((inputValue: string) => {
        const filteredData = games.filter((game) =>
          game.title.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredGames(filteredData);
      }, 300),
    [games]
  );

  const onSearchGamesHandler = (searchValue: string) => {
    debouncedSearchGamesAction(searchValue);
    setSearchValue(searchValue);
  };

  useEffect(() => {
    if (
      games.length &&
      (filters.categories.length === 0 || filters.categories.length === 1)
    ) {
      setFilteredGames(games);
      setSearchValue("");
    }
  }, [filters, games]);

  useEffect(() => {
    if (filterGames.length && filters.categories.length > 1) {
      setFilteredGames(filterGames);
      setSearchValue("");
    }
  }, [filters, filterGames]);

  useEffect(() => {
    return () => {
      debouncedSearchGamesAction.cancel();
    };
  }, [debouncedSearchGamesAction]);

  return {
    onSearchGamesHandler,
    searchValue,
    isLoading,
    filteredGames,
  };
};
