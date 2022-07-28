import axios from "axios";

export const api = axios.create({
	baseURL: "https://pokeapi.co/api/v2/",
});

export interface AxiosResponse<T> {
	count: number;
	next: string;
	previous: string;
	results: T;
}
