import { useContext } from "react";

import FavoritesContext from "../../store/Favorite-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem({ data }) {
  const { id, title, image, address, description } = data;
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);

  const handleToggleFavoritesStatus = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id,
        title,
        address,
        description,
        image,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={image.title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{address}</p>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavoritesStatus}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
