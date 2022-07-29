import { InputAdornment, TextField } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const Search = ({ onChange, value }: Props) => {
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
			value={value}
			onChange={(event) => {
				onChange(event.target.value);
			}}
			variant="outlined"
		/>
	);
};

interface Props {
	onChange: (value: string) => void;
	value: string;
}

export default Search;
