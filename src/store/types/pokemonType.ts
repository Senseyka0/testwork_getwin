import { Pokemon } from "../../models/pokemon";

export enum PokemonConstants {
	fetching = "FETCH_POKEMONS",
	success = "FETCH_POKEMONS_SUCCESS",
	error = "FETCH_POKEMONS_ERROR",
}

export interface PokemonState {
	pokemons: Pokemon[];
	isLoading: boolean;
	error: string;
}

interface fetchPokemonAction {
	type: PokemonConstants.fetching;
}
interface fetchPokemonSuccessAction {
	type: PokemonConstants.success;
	payload: Pokemon[];
}
interface fetchPokemonErrorAction {
	type: PokemonConstants.error;
	payload: string;
}

export type PokemonAction =
	| fetchPokemonAction
	| fetchPokemonSuccessAction
	| fetchPokemonErrorAction;
