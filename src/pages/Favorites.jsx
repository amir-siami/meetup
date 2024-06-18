import { useContext } from "react";

import FavoritesContext from "../store/Favorite-context";

import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.favoritesNums === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList data={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
