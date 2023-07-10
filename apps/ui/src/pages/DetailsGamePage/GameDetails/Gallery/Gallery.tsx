import { Screenshot } from "@/types/games";

import classes from "./gallery.module.css";
import { BASE_GAME_IMAGE_URL } from "@/config";

type GalleryProps = {
  screenshots: Screenshot[];
  title: string;
};

export const Gallery = ({ screenshots, title }: GalleryProps) => (
  <div className={classes.wrapper} data-cy="game-details-gallery">
    {screenshots.map((screenshot) => (
      <img key={screenshot.id} src={`${BASE_GAME_IMAGE_URL}${screenshot.image}`} alt={title} loading="lazy" width="400px" />
    ))}
  </div>
);
