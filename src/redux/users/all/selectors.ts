import {RootState} from '../../';


export const selectAllUsersState = (state: RootState) => state.users.all;
export const selectAllUsers = (state: RootState) => selectAllUsersState(state).users;
export const selectAllUsersSort = (state: RootState) => selectAllUsersState(state).sort;

export const selectAllUsersPagination = (state: RootState) => ({
	pageSize: selectAllUsersState(state).pageSize,
	curPage: selectAllUsersState(state).currentPage,
	totalItems: selectAllUsersState(state).total
});
