import {RootState} from '../../';


export const selectAllCommissionsState = (state: RootState) => state.commissions.all;
export const selectAllCommissions = (state: RootState) => selectAllCommissionsState(state).commissions;
export const selectAllCommissionsSort = (state: RootState) => selectAllCommissionsState(state).sort;

export const selectAllCommissionsPagination = (state: RootState) => ({
	pageSize: selectAllCommissionsState(state).pageSize,
	curPage: selectAllCommissionsState(state).currentPage,
	totalItems: selectAllCommissionsState(state).total
});
