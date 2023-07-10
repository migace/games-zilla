import { useGetGameQuery } from "@/services/games";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useParams } from "react-router-dom";
import { GameDetails } from "./GameDetails";

export const DetailsGamePage = () => {
  const { gameId } = useParams();
  const { data: game = null, isLoading: isGameLoading } = useGetGameQuery(
    typeof gameId === "string" ? +gameId : skipToken
  );

  return (
    <div className="container">
      <GameDetails game={game} isLoading={isGameLoading} />
    </div>
  );
};
