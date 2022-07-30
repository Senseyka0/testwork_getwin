import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useActions, useTypedSelector, usePokemons, useDebounce } from "../../../hooks";

import { ROUTES } from "../../../constants/routes";

const Pokemons = () => {
	const { fetchPokemons } = useActions();
	const { error, isLoading, pokemons, type, searchValue } = useTypedSelector(
		(state) => state.pokemons
	);

	const navigate = useNavigate();

	useEffect(() => {
		fetchPokemons();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const debouncedSearchValue = useDebounce(searchValue, 500);

	const filteredPokemons = usePokemons(pokemons, type, debouncedSearchValue);

	const onClickPokemon = (name: string) => {
		navigate(`${ROUTES.POKEMON}/${name}`);
	};

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return (
		<>
			{filteredPokemons.map(({ name }) => (
				<div key={name} onClick={() => onClickPokemon(name)} className="pokemon">
					{name}
				</div>
			))}
		</>
	);
};

export default Pokemons;
