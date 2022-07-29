import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useActions, useTypedSelector } from "../../../hooks/redux";

import { ROUTES } from "../../../constants/routes";

const Pokemons = () => {
	const { fetchPokemons } = useActions();
	const { error, isLoading, pokemons } = useTypedSelector((state) => state.pokemons);
	const navigate = useNavigate();

	useEffect(() => {
		fetchPokemons();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickPokemon = (name: string) => {
		navigate(`${ROUTES.POKEMON}/${name}`);
	};

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return (
		<>
			{pokemons.map(({ name }) => (
				<div key={name} onClick={() => onClickPokemon(name)} className="pokemon">
					{name}
				</div>
			))}
		</>
	);
};

export default Pokemons;
