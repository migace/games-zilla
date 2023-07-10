import { Spinner } from "@/components/Spinner/Spinner";
import { SingleGame } from "@/types/games";
import { FaAngleLeft } from "react-icons/fa";

import { Gallery } from "./Gallery";
import classes from "./game-details.module.css";
import { BASE_GAME_IMAGE_URL } from "@/config";
import { Link } from "@/components/Link";

type GameDetailsProps = {
  isLoading: boolean;
  game: SingleGame | null;
};

export const GameDetails = ({ isLoading, game }: GameDetailsProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!game) {
    return "Missing game details!";
  }

  return (
    <div className={classes.wrapper}>
      <div className={`box-shadow ${classes.info}`}>
        <img
          src={`${BASE_GAME_IMAGE_URL}${game.thumbnail}`}
          alt={game.title}
          loading="lazy"
          width="500"
        />
        <div className={classes.gameDetails}>
          <div>
            <h2 className={classes.title}>Requirements</h2>
            {game.minimumSystemRequirements ? (
              <table>
                <tbody>
                  {Object.entries(game.minimumSystemRequirements).map(
                    (requirement) => (
                      <tr key={requirement[0]}>
                        <td>
                          <span>{requirement[0].toUpperCase()}</span>
                        </td>
                        <td>{requirement[1]}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            ) : (
              <p>Not available</p>
            )}
          </div>
          <div>
            <h1 className={classes.title}>{game.title}</h1>
            <p className={classes.description}>{game.description}</p>
            <table className={classes.additionalInfo} data-cy="game-details-requirements">
              <tbody>
                <tr>
                  <td>
                    <span>RELEASE DATE</span>
                  </td>
                  <td>{game.releaseDate}</td>
                </tr>
                <tr>
                  <td>
                    <span>DEVLOPER</span>
                  </td>
                  <td>{game.developer}</td>
                </tr>
                <tr>
                  <td>
                    <span>PUBLISHER</span>
                  </td>
                  <td>{game.publisher}</td>
                </tr>
                <tr>
                  <td>
                    <span>GENRE</span>
                  </td>
                  <td>{game.genre}</td>
                </tr>
                <tr>
                  <td>
                    <span>PLATFORM</span>
                  </td>
                  <td>{game.platform}</td>
                </tr>
                <tr>
                  <td>
                    <span>STATUS</span>
                  </td>
                  <td>{game.status}</td>
                </tr>
              </tbody>
            </table>
            <div className={classes.backLinkWrapper}>
              <Link href="/" iconLeft={<FaAngleLeft />}>
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Gallery screenshots={game.screenshots} title={game.title} />
    </div>
  );
};
