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

	return (
		<div>
			<img
				src={"https://static.posters.cz/image/1300/Плакати/pokemon-pikachu-neon-i71936.jpg"}
				alt={pokemon?.name}
				width={200}
				height={300}
			/>

			<h1>{pokemon?.name}</h1>

			<div className="moves">
				moves:{" "}
				{pokemon?.moves.map((move) => (
					<span className="move">{move.move.name}, </span>
				))}
			</div>

			<div className="stats">
				stats:{" "}
				{pokemon?.stats.map((stat) => (
					<span className="stat">{stat.stat.name}, </span>
				))}
			</div>
		</div>
	);
};

interface UrlProps {
	pokemonName?: string;
}
export default Pokemon;
