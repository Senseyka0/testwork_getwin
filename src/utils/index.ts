export const getPagesArray = (pagesCount: number) => {
	const pagesArray = [];

	for (let i = 0; i <= pagesCount; i++) {
		pagesArray.push(i + 1);
	}

	return pagesArray;
};

export const getPagesCount = (totalCountPages: number, pageLimit: number): number => {
	return Math.ceil(totalCountPages / pageLimit);
};
