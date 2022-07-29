import { PokemonAction, PokemonsConstants, PokemonsState } from "../types/pokemonsType";

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
		case PokemonsConstants.fetching:
			return { ...state, isLoading: true, error: "" };
		case PokemonsConstants.success:
			return { ...state, isLoading: false, error: "", pokemons: action.payload };
		case PokemonsConstants.error:
			return { ...state, isLoading: false, error: action.payload };

		case PokemonsConstants.grid:
			return { ...state, grid: action.payload };
		case PokemonsConstants.searchValue:
			return { ...state, searchValue: action.payload };
		case PokemonsConstants.type:
			return { ...state, type: action.payload };
		default:
			return state;
	}
};
