import { Search, Sort, Toggle } from "./components";

const Home = ({}: Props) => {
	return (
		<div className="wrapper">
			<div className="filterWrapper">
				<div className="search">
					<Search />
				</div>

				<div className="sort">
					<Sort />
				</div>

				<div className="toggle-grid">
					<Toggle />
				</div>
			</div>

			<div className="pokemonsWrapper">
				<div className="pokemon"></div>
			</div>
		</div>
	);
};

interface Props {}

export default Home;
