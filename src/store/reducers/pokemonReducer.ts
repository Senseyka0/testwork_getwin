import { PokemonAction, PokemonConstants, PokemonState } from "../types/pokemonType";

const initialState: PokemonState = {
	pokemon: null,
	isLoading: false,
	error: "",
};

export const pokemonReducer = (state = initialState, action: PokemonAction): PokemonState => {
	switch (action.type) {
		case PokemonConstants.fetching:
			return { ...state, isLoading: true, error: "" };
		case PokemonConstants.success:
			return { ...state, isLoading: false, error: "", pokemon: action.payload };
		case PokemonConstants.error:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
