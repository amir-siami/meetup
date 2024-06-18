import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/Favorite-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              favorites
              <span className={classes.badge}>{favoriteCtx.favoritesNums}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
