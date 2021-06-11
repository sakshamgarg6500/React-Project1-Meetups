import { createContext, useState } from "react";

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,
});

function FavouritesContextProvider(props) {
	const [userFavourites, setUserFavourites] = useState([]);

	function addFavouriteHandler(favouriteMeetup) {
		setUserFavourites((previousFavourites) => {
			return previousFavourites.concat(favouriteMeetup);
		});
	}

	function removeFavouriteHandler(meetupId) {
		setUserFavourites((previousFavourites) => {
			return previousFavourites.filter((meetup) => meetup.id !== meetupId);
		});
	}

	function itemFavouriteHandler(meetupId) {
		return userFavourites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
	};

	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}
