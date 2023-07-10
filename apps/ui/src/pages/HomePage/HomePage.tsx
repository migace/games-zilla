import { BiSearch } from "react-icons/bi";
import { Input } from "@/components";

import { GamesList } from "./GamesList/GamesList";
import { Filters } from "./Filters";
import { useHomePage } from "./useHomePage";

export const HomePage = () => {
  const { onSearchGamesHandler, searchValue, isLoading, filteredGames } =
    useHomePage();

  return (
    <>
      <div className="mb-6">
        <Input
          placeholder="Search by Name..."
          onChange={onSearchGamesHandler}
          icon={<BiSearch />}
          dataCy="search-input"
          value={searchValue}
        />
      </div>
      <div className="container">
        <div className="mb-8">
          <Filters disabled={isLoading} />
        </div>
        <GamesList isLoading={isLoading} games={filteredGames} />
      </div>
    </>
  );
};
