import {RootState} from '../../index';


export const selectQualificationsShowState = (state: RootState) => state.qualifications.show;

export const selectShownQualifications = (state: RootState) => (
	selectQualificationsShowState(state).qualifications
);

export const selectQualificationsPagination = (state: RootState) => ({
	size: selectQualificationsShowState(state).pageSize,
	curPage: selectQualificationsShowState(state).currentPage,
	total: selectQualificationsShowState(state).total
});

export const selectQualificationsSort = (state: RootState) => selectQualificationsShowState(state).sort;
