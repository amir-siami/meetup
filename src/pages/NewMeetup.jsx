import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  const handleMeetup = async (meetupData) => {
    try {
      const response = await fetch(
        "https://react-getting-started-80eef-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(meetupData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send meetup data");
      }

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      // Handle the error appropriately (e.g., show a message to the user)
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleMeetup} />
    </section>
  );
}

export default NewMeetup;
