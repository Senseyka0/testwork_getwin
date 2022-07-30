import { api, AxiosResponse } from "./axios";

import { Pokemon, Pokemons } from "./../models/pokemon";

export const getPokemons = async (currentPage: number = 1) => {
	const { data } = await api.request<AxiosResponse<Pokemons[]>>({
		method: "GET",
		url: "pokemon",
		params: {
			limit: 21,
			offset: currentPage,
		},
	});

	const pokemonsWithType: AxiosResponse<Pokemons[]> = {
		...data,
		results: data.results.map((pokemon) => ({ ...pokemon, type: "normal" })),
	};

	return pokemonsWithType;
};

export const getPokemon = async (name: string) => {
	const { data } = await api.request<Pokemon>({
		method: "GET",
		url: `pokemon/${name}`,
	});

	return data;
};
