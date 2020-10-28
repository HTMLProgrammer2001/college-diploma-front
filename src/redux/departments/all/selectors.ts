import {RootState} from '../../';


export const selectAllDepartmentsState = (state: RootState) => state.departments.all;
export const selectAllDepartments = (state: RootState) => selectAllDepartmentsState(state).departments;
export const selectAllDepartmentsSort = (state: RootState) => selectAllDepartmentsState(state).sort;

export const selectAllDepartmentsPagination = (state: RootState) => ({
	pageSize: selectAllDepartmentsState(state).pageSize,
	curPage: selectAllDepartmentsState(state).currentPage,
	totalItems: selectAllDepartmentsState(state).total
});
