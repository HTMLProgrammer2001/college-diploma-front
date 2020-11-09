import {RootState} from '../../';


export const selectAllInternshipsState = (state: RootState) => state.internships.all;
export const selectAllInternships = (state: RootState) => selectAllInternshipsState(state).internships;
export const selectAllInternshipsSort = (state: RootState) => selectAllInternshipsState(state).sort;

export const selectAllInternshipsPagination = (state: RootState) => ({
	pageSize: selectAllInternshipsState(state).pageSize,
	curPage: selectAllInternshipsState(state).currentPage,
	totalItems: selectAllInternshipsState(state).total
});
