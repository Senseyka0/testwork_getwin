import { Pokemons, Search, Sort, Toggle } from "./components";

const Home = () => {
	return (
		<div className="home-wrapper">
			<div className="filter-wrapper">
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

			<div className="pokemons-wrapper">
				<Pokemons />
			</div>
		</div>
	);
};

interface Props {}

export default Home;
