import { useActions, useTypedSelector } from "../../hooks";

import { Pokemons, Filters, Pagination } from "./components";

const Home = () => {
	const { grid, currentPage, totalPages } = useTypedSelector((state) => state.pokemons);
	const { fetchPokemons } = useActions();

	const handlePageChange = (currentPage: number) => {
		fetchPokemons(currentPage);
	};

	return (
		<div className={`home-wrapper `}>
			<div className="filter-wrapper">
				<Filters />
			</div>

			<div className={`pokemons-wrapper ${grid}`}>
				<Pokemons />
			</div>

			<div className="pagination">
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					onChangePage={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default Home;
