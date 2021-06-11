import { useHistory } from "react-router-dom"; //react built in hook
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
	const history = useHistory();

	function onAddMeetupHandler(meetupData) {
		fetch(
			"https://react-project1-46566-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData), //converts javascript object to JSON
				headers: {
					"Content-type": "application/json",
				},
			}
		).then(() => history.replace("/"));
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
		</section>
	);
}

export default NewMeetups;
