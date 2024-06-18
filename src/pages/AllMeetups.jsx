import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://react-getting-started-80eef-default-rtdb.firebaseio.com/meetups.json"
        );
        const data = await response.json();

        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setLoadedMeetups(meetups);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
