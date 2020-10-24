export type IGeneralPaginationResponse<T> = {
	data: T[],
	meta: {
		current_page: number,
		per_page: number,
		total: number
	}
};
