import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <main>
      <MainNavigation />
      <div className={classes.main}>{children}</div>
    </main>
  );
}

export default Layout;
