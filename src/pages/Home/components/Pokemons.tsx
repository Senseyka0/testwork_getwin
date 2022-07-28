import { useEffect } from "react";

import { useActions, useTypedSelector } from "../../../hooks/redux";

const Pokemons = () => {
	const { fetchPokemons } = useActions();
	const { error, isLoading, pokemons } = useTypedSelector((state) => state.pokemons);

	useEffect(() => {
		fetchPokemons();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return (
		<>
			{pokemons.map((pokemon) => (
				<div key={pokemon.name} className="pokemon">
					{pokemon.name}
				</div>
			))}
		</>
	);
};

export default Pokemons;
