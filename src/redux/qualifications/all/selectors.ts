import {RootState} from '../../';


export const selectAllQualificationsState = (state: RootState) => state.qualifications.all;
export const selectAllQualifications = (state: RootState) => selectAllQualificationsState(state).qualifications;
export const selectAllQualificationsSort = (state: RootState) => selectAllQualificationsState(state).sort;

export const selectAllQualificationsPagination = (state: RootState) => ({
	pageSize: selectAllQualificationsState(state).pageSize,
	curPage: selectAllQualificationsState(state).currentPage,
	totalItems: selectAllQualificationsState(state).total
});
