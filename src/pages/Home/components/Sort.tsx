import { useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const Sort = () => {
	const [age, setAge] = useState("none");

	const handleChangeS = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	return (
		<Select value={age} label="Type" onChange={handleChangeS}>
			<MenuItem value="none">None</MenuItem>
			<MenuItem value={10}>Ten</MenuItem>
			<MenuItem value={20}>Twenty</MenuItem>
			<MenuItem value={30}>Thirty</MenuItem>
		</Select>
	);
};

export default Sort;
