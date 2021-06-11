import { useState, useEffect } from "react"; //importinng react hooks
//[useeffect] hook allows us to run some code under certain conditions
//state tells us what to display on the screen when certain conditions change
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]); //declaring as an empty array

	useEffect(() => {
		fetch(
			"https://react-project1-46566-default-rtdb.firebaseio.com/meetups.json"
		) //no need for [method] as by default it is a get request
			.then((response) => {
				return response.json(); //converting data from jso to plain javascript object
				//this [json] method also returns a promise
			})
			.then((data) => {
				const meetups = [];

				//after fetching data we get ecrypted keys in which our data is nested
				//so we need to convert our data into array format
				for (const key in data) {
					//we go through all the keys in the data
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}

				setIsLoading(false); //after getting data
				//whenever state updating function is called, the whole react component is re-executed
				setLoadedMeetups(meetups); //setting data
			});
	}, []);
	//value of dependencies does not change as there are no values
	// so this function is executed only once

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
