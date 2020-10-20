import {RootState} from '../../';


export const selectProfileQualificationsState = (state: RootState) => state.profile.qualifications;

export const selectProfileQualifications = (state: RootState) => (
	selectProfileQualificationsState(state).qualifications
);

export const selectProfileQualificationsPagination = (state: RootState) => ({
	size: selectProfileQualificationsState(state).pageSize,
	curPage: selectProfileQualificationsState(state).currentPage,
	total: selectProfileQualificationsState(state).total
});

export const selectProfileQualificationsSort = (state: RootState) => (
	selectProfileQualificationsState(state).sort
);
