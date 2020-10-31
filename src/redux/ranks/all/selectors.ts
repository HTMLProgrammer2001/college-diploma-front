import {RootState} from '../../';


export const selectAllRanksState = (state: RootState) => state.ranks.all;
export const selectAllRanks = (state: RootState) => selectAllRanksState(state).ranks;
export const selectAllRanksSort = (state: RootState) => selectAllRanksState(state).sort;

export const selectAllRanksPagination = (state: RootState) => ({
	pageSize: selectAllRanksState(state).pageSize,
	curPage: selectAllRanksState(state).currentPage,
	totalItems: selectAllRanksState(state).total
});
