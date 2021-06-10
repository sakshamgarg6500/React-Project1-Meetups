import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
	const titleInputref = useRef();
	const imageInputref = useRef();
	const addressInputref = useRef();
	const descriptionInputref = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputref.current.value;
		const enteredImage = imageInputref.current.value;
		const enteredAddress = addressInputref.current.value;
		const enteredDescription = descriptionInputref.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		props.onAddMeetup(meetupData);
	}

	return (
		<Card>
			<form className={classes.form}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" id="title" ref={titleInputref}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input type="url" required id="image" ref={imageInputref}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						required
						id="address"
						ref={addressInputref}
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						required
						rows="5"
						id="description"
						ref={descriptionInputref}
					></textarea>
				</div>

				<div className={classes.actions}>
					<button type="submit" onClick={submitHandler}>
						Add Meetup
					</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
