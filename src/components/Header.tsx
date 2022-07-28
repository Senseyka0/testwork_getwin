import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

const Header = () => {
	return (
		<div className="header">
			<h1 className="title">Poke Poke Senseyka</h1>

			<div className="header-links">
				<Link to={ROUTES.HOME}>Home</Link>
			</div>
		</div>
	);
};

export default Header;
