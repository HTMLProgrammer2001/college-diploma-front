import {RootState} from '../../';


export const selectProfileInternshipsState = (state: RootState) => state.profile.internships;

export const selectProfileInternships = (state: RootState) => (
	selectProfileInternshipsState(state).internships
);

export const selectProfileInternshipsPagination = (state: RootState) => ({
	pageSize: selectProfileInternshipsState(state).pageSize,
	curPage: selectProfileInternshipsState(state).currentPage,
	totalItems: selectProfileInternshipsState(state).total
});

export const selectProfileInternshipsSort = (state: RootState) => (
	selectProfileInternshipsState(state).sort
);
