import { useMemo } from "react";
import { Pokemons } from "../models/pokemon";

export const useSortedPokemons = (pokemons: Pokemons[], filter: string) => {
	const sortedPokemons = useMemo(() => {
		if (filter === "bold") {
			return pokemons.filter((pokemon) => pokemon.type === "bold");
		}

		return pokemons;
	}, [filter, pokemons]);

	return sortedPokemons;
};

export const usePokemons = (pokemons: Pokemons[], filter: string, searchValue: string) => {
	const sortedPosts = useSortedPokemons(pokemons, filter);

	const sortedAndSearchedPokemons = useMemo(() => {
		return sortedPosts.filter((pokemon: Pokemons) =>
			pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
		);
	}, [searchValue, sortedPosts]);

	return sortedAndSearchedPokemons;
};
