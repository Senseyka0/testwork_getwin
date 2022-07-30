import { PokemonsAction, PokemonsConstants, PokemonsState } from "../types/pokemonsType";

const initialState: PokemonsState = {
	pokemons: [],
	isLoading: false,
	error: "",
	grid: "list",
	searchValue: "",
	type: "normal",
	currentPage: 1,
	totalPages: 0,
};

export const pokemonsReducer = (state = initialState, action: PokemonsAction): PokemonsState => {
	switch (action.type) {
		case PokemonsConstants.fetching:
			return { ...state, isLoading: true, error: "" };

		case PokemonsConstants.success:
			return {
				...state,
				isLoading: false,
				error: "",
				pokemons: action.payload.results,
				totalPages: action.payload.count,
			};

		case PokemonsConstants.error:
			return { ...state, isLoading: false, error: action.payload };

		case PokemonsConstants.grid:
			return { ...state, grid: action.payload };

		case PokemonsConstants.searchValue:
			return {
				...state,
				searchValue: action.payload,
			};

		case PokemonsConstants.type:
			return { ...state, type: action.payload };

		case PokemonsConstants.currentPage:
			return { ...state, currentPage: action.payload };

		case PokemonsConstants.totalPages:
			return { ...state, totalPages: action.payload };

		default:
			return state;
	}
};
