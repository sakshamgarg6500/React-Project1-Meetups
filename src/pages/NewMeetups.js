import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
	const history = useHistory();

	function onAddMeetupHandler(meetupData) {
		fetch("URL", {
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => history.replace("/"));
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
		</section>
	);
}

export default NewMeetups;
