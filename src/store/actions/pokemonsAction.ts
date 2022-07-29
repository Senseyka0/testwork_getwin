import { AxiosError } from "axios";
import { AppDispatch } from "..";

import { getPokemons } from "../../api/pokemon";

import { PokemonsConstants } from "../types/pokemonsType";
import { Grid, Type } from "../../models/pokemon";

export const fetchPokemons = () => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: PokemonsConstants.fetching });

		try {
			const { results } = await getPokemons();

			dispatch({ type: PokemonsConstants.success, payload: results });
		} catch (error) {
			dispatch({ type: PokemonsConstants.error, payload: (error as AxiosError).message });
		}
	};
};
export const setSearchValue = (searchValue: string) => ({
	type: PokemonsConstants.searchValue,
	payload: searchValue,
});

export const setGrid = (grid: Grid) => ({
	type: PokemonsConstants.grid,
	payload: grid,
});
export const setType = (type: Type) => ({
	type: PokemonsConstants.type,
	payload: type,
});
