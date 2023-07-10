import { BASE_GAME_IMAGE_URL } from "@/config";
import { Game } from "@/types/games";
import { FaAngleRight } from "react-icons/fa";

import classes from "./game-item.module.css";
import { Link } from "@/components/Link";

type GameItemProps = {
  game: Game;
};

export const GameItem = ({ game }: GameItemProps) => (
  <div className={`box-shadow ${classes.wrapper}`} data-cy="game-item">
    <h1 className={classes.title}>{game.title}</h1>
    <div className={classes.description}>
      <img
        src={`${BASE_GAME_IMAGE_URL}/${game.thumbnail}`}
        alt={game.title}
        loading="lazy"
        width="200"
      />
      <div className="w-full">
        <p>{game.shortDescription}</p>
        <div className={classes.viewDetails}>
          <Link
            dataCy="game-item-view-more"
            href={`games/${game.id}`}
            iconRight={<FaAngleRight />}
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  </div>
);
