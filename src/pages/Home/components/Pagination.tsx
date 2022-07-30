import { getPagesArray } from "../../../utils";

const Pagination = ({ totalPages, currentPage, onChangePage }: Props) => {
	const pagesArray = getPagesArray(totalPages);

	return (
		<>
			{pagesArray.map((page) => (
				<span
					className={currentPage === page ? "page current-page" : "page"}
					onClick={() => onChangePage(page)}
					key={page}
				>
					{page}
				</span>
			))}
		</>
	);
};

interface Props {
	totalPages: number;
	currentPage: number;
	onChangePage: (page: number) => void;
}

export default Pagination;
