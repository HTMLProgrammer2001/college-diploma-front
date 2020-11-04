import {RootState} from '../../';


export const selectAllCategoriesState = (state: RootState) => state.categories.all;
export const selectAllCategories = (state: RootState) => selectAllCategoriesState(state).categories;
export const selectAllCategoriesSort = (state: RootState) => selectAllCategoriesState(state).sort;

export const selectAllCategoriesPagination = (state: RootState) => ({
	pageSize: selectAllCategoriesState(state).pageSize,
	curPage: selectAllCategoriesState(state).currentPage,
	totalItems: selectAllCategoriesState(state).total
});
