import {RootState} from '../../index';


export const selectInternshipsShowState = (state: RootState) => state.internships.show;

export const selectShownInternships = (state: RootState) => (
	selectInternshipsShowState(state).internships
);

export const selectInternshipsPagination = (state: RootState) => ({
	size: selectInternshipsShowState(state).pageSize,
	curPage: selectInternshipsShowState(state).currentPage,
	total: selectInternshipsShowState(state).total
});

export const selectInternshipsSort = (state: RootState) => selectInternshipsShowState(state).sort;
