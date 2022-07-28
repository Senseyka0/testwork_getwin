import { api, AxiosResponse } from "./axios";

import { Pokemon, Pokemons } from "./../models/pokemon";

export const getPokemons = async () => {
	const { data } = await api.request<AxiosResponse<Pokemon[]>>({
		method: "GET",
		url: "pokemon",
	});

	return data;
};

export const getPokemon = async (name: string) => {
	const { data } = await api.request<AxiosResponse<Pokemon[]>>({
		method: "GET",
		url: `pokemon/${name}`,
	});

	return data;
};
