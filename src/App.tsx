import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
	return (
		<div className="wrapper">
			<Header />

			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
