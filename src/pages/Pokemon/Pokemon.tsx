import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useActions, useTypedSelector } from "../../hooks/redux";

const Pokemon = () => {
	// get params from url
	const { pokemonName }: UrlProps = useParams();

	const { fetchPokemon } = useActions();
	const { pokemon, error, isLoading } = useTypedSelector((state) => state.pokemon);

	useEffect(() => {
		if (pokemonName) {
			fetchPokemon(pokemonName);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pokemonName]);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return <div>{pokemon?.name}</div>;
};

interface UrlProps {
	pokemonName?: string;
}
export default Pokemon;
