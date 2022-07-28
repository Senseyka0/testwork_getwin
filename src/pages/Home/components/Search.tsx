import { InputAdornment, TextField } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const Search = () => {
	return (
		<TextField
			label="Search"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<CatchingPokemonIcon />
					</InputAdornment>
				),
			}}
			variant="outlined"
		/>
	);
};

export default Search;
