import { Pokemon } from "../../models/pokemon";

export interface PokemonState {
	pokemon: null | Pokemon;
	isLoading: boolean;
	error: string;
}

export enum PokemonConstants {
	fetching = "FETCH_POKEMON",
	success = "FETCH_POKEMON_SUCCESS",
	error = "FETCH_POKEMON_ERROR",
}

interface fetchPokemonAction {
	type: PokemonConstants.fetching;
}
interface fetchPokemonSuccessAction {
	type: PokemonConstants.success;
	payload: Pokemon;
}
interface fetchPokemonErrorAction {
	type: PokemonConstants.error;
	payload: string;
}

export type PokemonAction =
	| fetchPokemonAction
	| fetchPokemonSuccessAction
	| fetchPokemonErrorAction;
