import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import { Header } from "./components";
import { Home, Pokemon } from "./pages";
import { Content } from "./layouts";

const App = () => {
	// PokeApi doesn't have a search endpoint (maybe i just didn't find it) and i decided to search in the client side.

	return (
		<div className="wrapper">
			<Header />

			<Content>
				<Routes>
					<Route path={ROUTES.HOME} element={<Home />} />

					<Route path={`${ROUTES.POKEMON}/:pokemonName`} element={<Pokemon />} />
				</Routes>
			</Content>
		</div>
	);
};

export default App;
