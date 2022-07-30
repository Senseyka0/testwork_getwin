import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { Type } from "../../../models/pokemon";

const Sort = ({ onChange, value }: Props) => {
	const onSort = (event: SelectChangeEvent) => {
		onChange(event.target.value as Type);
	};

	return (
		<Select label="Type" value={value} onChange={onSort}>
			<MenuItem value="normal">Normal</MenuItem>
			<MenuItem value={"bold"}>Bold</MenuItem>
		</Select>
	);
};

interface Props {
	onChange: (value: Type) => void;
	value: Type;
}
export default Sort;
