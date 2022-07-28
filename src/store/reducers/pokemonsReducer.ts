import { PokemonAction, PokemonConstants, PokemonsState } from "../types/pokemonsType";

const initialState: PokemonsState = {
	pokemons: [],
	isLoading: false,
	error: "",
	grid: "list",
	searchValue: "",
	type: "normal",
};

export const pokemonsReducer = (state = initialState, action: PokemonAction): PokemonsState => {
	switch (action.type) {
		case PokemonConstants.fetching:
			return { ...state, isLoading: true, error: "" };
		case PokemonConstants.success:
			return { ...state, isLoading: false, error: "", pokemons: action.payload };
		case PokemonConstants.error:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
