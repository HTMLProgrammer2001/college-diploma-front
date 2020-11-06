import {RootState} from '../../';


export const selectAllRebukesState = (state: RootState) => state.rebukes.all;
export const selectAllRebukes = (state: RootState) => selectAllRebukesState(state).rebukes;
export const selectAllRebukesSort = (state: RootState) => selectAllRebukesState(state).sort;

export const selectAllRebukesPagination = (state: RootState) => ({
	pageSize: selectAllRebukesState(state).pageSize,
	curPage: selectAllRebukesState(state).currentPage,
	totalItems: selectAllRebukesState(state).total
});
