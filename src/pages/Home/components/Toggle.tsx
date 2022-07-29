import { MouseEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import { Grid } from "../../../models/pokemon";

const Toggle = ({ onChange, value }: Props) => {
	const onToggle = (_: MouseEvent<HTMLElement>, nextView: Grid) => {
		onChange(nextView);
	};

	return (
		<ToggleButtonGroup exclusive value={value} onChange={onToggle}>
			<ToggleButton value="list">
				<ViewListIcon />
			</ToggleButton>

			<ToggleButton value="module">
				<ViewModuleIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

interface Props {
	onChange: (value: Grid) => void;
	value: Grid;
}
export default Toggle;
