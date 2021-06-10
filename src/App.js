import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
	//these are react components
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage />
				</Route>
				<Route path="/new-meetup">
					<NewMeetupsPage />
				</Route>
				<Route path="/favourites">
					<FavouritesPage />
				</Route>
			</Switch>
		</Layout> //this is the jsx code
	);
}

export default App; //exporting components
