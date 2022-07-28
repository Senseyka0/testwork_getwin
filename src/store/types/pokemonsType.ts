import { Pokemons, Type } from "../../models/pokemon";

type Grid = "list" | "module";

export interface PokemonsState {
	pokemons: Pokemons[];
	isLoading: boolean;
	error: string;
	grid: Grid;
	searchValue: string;
	type: Type;
}

export enum PokemonConstants {
	fetching = "FETCH_POKEMONS",
	success = "FETCH_POKEMONS_SUCCESS",
	error = "FETCH_POKEMONS_ERROR",
}

interface fetchPokemonAction {
	type: PokemonConstants.fetching;
}
interface fetchPokemonSuccessAction {
	type: PokemonConstants.success;
	payload: Pokemons[];
}
interface fetchPokemonErrorAction {
	type: PokemonConstants.error;
	payload: string;
}

export type PokemonAction =
	| fetchPokemonAction
	| fetchPokemonSuccessAction
	| fetchPokemonErrorAction;
