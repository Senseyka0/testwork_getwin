import { MouseEvent, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

const Toggle = () => {
	const [view, setView] = useState("list");

	const handleChange = (_: MouseEvent<HTMLElement>, nextView: string) => {
		setView(nextView);
	};

	return (
		<ToggleButtonGroup value={view} exclusive onChange={handleChange}>
			<ToggleButton value="list">
				<ViewListIcon />
			</ToggleButton>

			<ToggleButton value="module">
				<ViewModuleIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default Toggle;
