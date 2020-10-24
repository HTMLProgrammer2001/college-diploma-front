import {RootState} from '../../';


export const selectProfileEducationsState = (state: RootState) => state.profile.educations;

export const selectProfileEducations = (state: RootState) => (
	selectProfileEducationsState(state).educations
);

export const selectProfileEducationsPagination = (state: RootState) => ({
	pageSize: selectProfileEducationsState(state).pageSize,
	curPage: selectProfileEducationsState(state).currentPage,
	totalItems: selectProfileEducationsState(state).total
});

export const selectProfileEducationsSort = (state: RootState) => (
	selectProfileEducationsState(state).sort
);
