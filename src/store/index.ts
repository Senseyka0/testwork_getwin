import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { pokemonReducer } from "./reducers/pokemonReducer";
import { pokemonsReducer } from "./reducers/pokemonsReducer";

const rootReducer = combineReducers({
	pokemons: pokemonsReducer,
	pokemon: pokemonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
