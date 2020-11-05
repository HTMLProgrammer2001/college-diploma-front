import {RootState} from '../../';


export const selectAllHonorsState = (state: RootState) => state.honors.all;
export const selectAllHonors = (state: RootState) => selectAllHonorsState(state).honors;
export const selectAllHonorsSort = (state: RootState) => selectAllHonorsState(state).sort;

export const selectAllHonorsPagination = (state: RootState) => ({
	pageSize: selectAllHonorsState(state).pageSize,
	curPage: selectAllHonorsState(state).currentPage,
	totalItems: selectAllHonorsState(state).total
});
