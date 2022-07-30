import { useTypedSelector } from "../../hooks/redux";
import { Pokemons, Filters } from "./components";

const Home = () => {
	const { grid } = useTypedSelector((state) => state.pokemons);

	return (
		<div className={`home-wrapper `}>
			<div className="filter-wrapper">
				<Filters />
			</div>

			<div className={`pokemons-wrapper ${grid}`}>
				<Pokemons />
			</div>
		</div>
	);
};

export default Home;
