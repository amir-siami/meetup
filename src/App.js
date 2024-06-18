import { Route, Routes } from "react-router-dom";
import Allmeetups from "./pages/AllMeetups";
import favorites from "./pages/Favorites";
import Newmeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Allmeetups} exact />
        <Route path="/favorites" Component={favorites} />
        <Route path="/new-meetup" Component={Newmeetup} />
      </Routes>
    </Layout>
  );
}

export default App;
