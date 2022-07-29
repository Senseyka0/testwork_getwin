import { Pokemons, Filters } from "./components";

const Home = () => {
	return (
		<div className="home-wrapper">
			<div className="filter-wrapper">
				<Filters />
			</div>

			<div className="pokemons-wrapper">
				<Pokemons />
			</div>
		</div>
	);
};

export default Home;
