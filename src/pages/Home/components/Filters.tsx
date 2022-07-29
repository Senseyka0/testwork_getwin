import { useActions, useTypedSelector } from "../../../hooks/redux";
import { Grid, Type } from "../../../models/pokemon";

import { Search, Sort, Toggle } from "./";

const Filters = () => {
	const { setGrid, setType, setSearchValue } = useActions();
	const { grid, searchValue, type } = useTypedSelector((state) => state.pokemons);

	const onChangeSearch = (value: string) => {
		setSearchValue(value);
	};

	const onChangeGrid = (value: Grid) => {
		setGrid(value);
	};

	const onChangeType = (value: Type) => {
		setType(value);
	};

	return (
		<>
			<div className="search">
				<Search onChange={onChangeSearch} value={searchValue} />
			</div>

			<div className="sort">
				<Sort onChange={onChangeType} value={type} />
			</div>

			<div className="toggle-grid">
				<Toggle onChange={onChangeGrid} value={grid} />
			</div>
		</>
	);
};

export default Filters;
