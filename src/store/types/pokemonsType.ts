import { Grid, Pokemons, Type } from "../../models/pokemon";

export interface PokemonsState {
	pokemons: Pokemons[];
	isLoading: boolean;
	error: string;
	grid: Grid;
	searchValue: string;
	type: Type;
	currentPage: number;
	totalPages: number;
}

export enum PokemonsConstants {
	fetching = "FETCH_POKEMONS",
	success = "FETCH_POKEMONS_SUCCESS",
	error = "FETCH_POKEMONS_ERROR",
	grid = "SET_GRID",
	searchValue = "SET_SEARCH_VALUE",
	type = "SET_TYPE",
	currentPage = "SET_CURRENT_PAGE",
	totalPages = "SET_TOTAL_PAGES",
}

interface fetchPokemonsAction {
	type: PokemonsConstants.fetching;
}
interface fetchPokemonsSuccessAction {
	type: PokemonsConstants.success;
	payload: { results: Pokemons[]; count: number };
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

interface setTypeAction {
	type: PokemonsConstants.type;
	payload: Type;
}

interface setCurrentPageAction {
	type: PokemonsConstants.currentPage;
	payload: number;
}

interface setTotalPagesAction {
	type: PokemonsConstants.totalPages;
	payload: number;
}

export type PokemonsAction =
	| fetchPokemonsAction
	| fetchPokemonsSuccessAction
	| fetchPokemonsErrorAction
	| setGridAction
	| setSearchValueAction
	| setTypeAction
	| setCurrentPageAction
	| setTotalPagesAction;
