import { Grid, Pokemons, Type } from "../../models/pokemon";

export interface PokemonsState {
	pokemons: Pokemons[];
	isLoading: boolean;
	error: string;
	grid: Grid;
	searchValue: string;
	type: Type;
}

export enum PokemonsConstants {
	fetching = "FETCH_POKEMONS",
	success = "FETCH_POKEMONS_SUCCESS",
	error = "FETCH_POKEMONS_ERROR",
	grid = "SET_GRID",
	searchValue = "SET_SEARCH_VALUE",
	type = "SET_TYPE",
}

interface fetchPokemonsAction {
	type: PokemonsConstants.fetching;
}
interface fetchPokemonsSuccessAction {
	type: PokemonsConstants.success;
	payload: Pokemons[];
}
interface fetchPokemonsErrorAction {
	type: PokemonsConstants.error;
	payload: string;
}

interface setGridAction {
	type: PokemonsConstants.grid;
	payload: Grid;
}
interface setSearchValueAction {
	type: PokemonsConstants.searchValue;
	payload: string;
}

interface setTyeAction {
	type: PokemonsConstants.type;
	payload: Type;
}

export type PokemonAction =
	| fetchPokemonsAction
	| fetchPokemonsSuccessAction
	| fetchPokemonsErrorAction
	| setGridAction
	| setSearchValueAction
	| setTyeAction;
