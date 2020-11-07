import {RootState} from '../../';


export const selectAllEducationsState = (state: RootState) => state.educations.all;
export const selectAllEducations = (state: RootState) => selectAllEducationsState(state).educations;
export const selectAllEducationsSort = (state: RootState) => selectAllEducationsState(state).sort;

export const selectAllEducationsPagination = (state: RootState) => ({
	pageSize: selectAllEducationsState(state).pageSize,
	curPage: selectAllEducationsState(state).currentPage,
	totalItems: selectAllEducationsState(state).total
});
