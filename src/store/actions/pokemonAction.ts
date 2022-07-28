import { AxiosError } from "axios";
import { AppDispatch } from "..";
import { PokemonConstants } from "../types/pokemonType";

import { getPokemons } from "../../api/pokemon";

export const fetchPokemons = () => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: PokemonConstants.fetching });

		try {
			const { results } = await getPokemons();

			dispatch({ type: PokemonConstants.success, payload: results });
		} catch (error) {
			dispatch({ type: PokemonConstants.error, payload: (error as AxiosError).message });
		}
	};
};
