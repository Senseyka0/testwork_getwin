import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { Type } from "../../../models/pokemon";

const Sort = ({ onChange, value }: Props) => {
	const onSort = (event: SelectChangeEvent) => {
		onChange(event.target.value as Type);
	};

	return (
		<Select label="Type" value={value} onChange={onSort}>
			<MenuItem value="none">None</MenuItem>
			<MenuItem value={10}>Ten</MenuItem>
			<MenuItem value={20}>Twenty</MenuItem>
			<MenuItem value={30}>Thirty</MenuItem>
		</Select>
	);
};

interface Props {
	onChange: (value: Type) => void;
	value: Type;
}
export default Sort;
