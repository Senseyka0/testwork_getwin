import { PokemonAction, PokemonConstants, PokemonState } from "../types/pokemonType";

const initialState: PokemonState = {
	pokemons: [],
	isLoading: false,
	error: "",
};

export const pokemonReducer = (state = initialState, action: PokemonAction): PokemonState => {
	switch (action.type) {
		case PokemonConstants.fetching:
			return { isLoading: true, error: "", pokemons: [] };
		case PokemonConstants.success:
			return { isLoading: false, error: "", pokemons: action.payload };
		case PokemonConstants.error:
			return { isLoading: false, error: action.payload, pokemons: [] };
		default:
			return state;
	}
};
