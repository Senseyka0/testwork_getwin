import { AxiosError } from "axios";

import { AppDispatch } from "..";
import { PokemonConstants } from "../types/pokemonType";

import { getPokemon } from "../../api/pokemon";

export const fetchPokemon = (pokemonName: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: PokemonConstants.fetching });

		try {
			const pokemon = await getPokemon(pokemonName);

			dispatch({ type: PokemonConstants.success, payload: pokemon });
		} catch (error) {
			dispatch({ type: PokemonConstants.error, payload: (error as AxiosError).message });
		}
	};
};
