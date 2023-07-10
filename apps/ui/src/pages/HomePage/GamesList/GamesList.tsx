import { Spinner } from "@/components/Spinner/Spinner";

import classes from "./games-list.module.css";
import { GameItem } from "./GameItem";
import { Game } from "@/types/games";

type GamesListProps = {
    isLoading: boolean;
    games: Game[];
}

export const GamesList = ({ isLoading, games }: GamesListProps) => {
  if (isLoading) {
    return <Spinner />
  }

  if (!games.length) {
    return "Missing games!";
  }

  return (
    <div className={classes.listWrapper} data-cy="games-list">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};
