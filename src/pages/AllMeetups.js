import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		fetch("URL")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}

				setIsLoading(false); //after getting data
				setLoadedMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		//if we are loading, display other jsx code
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}

export default AllMeetups;
