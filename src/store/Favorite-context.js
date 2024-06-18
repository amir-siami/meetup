import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesNums: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const handleAddFavorite = (favoriteMeetup) => {
    setUserFavorites((prevFavorite) => {
      return prevFavorite.concat(favoriteMeetup);
    });
  };

  const handleRemoveFavorite = (meetupId) => {
    setUserFavorites((prevFavorite) => {
      return prevFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const handleIsFavorite = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    favoritesNums: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleIsFavorite,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
