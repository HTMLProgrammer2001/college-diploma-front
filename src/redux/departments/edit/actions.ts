import {
	EDIT_DEPARTMENT_LOAD_ERROR,
	EDIT_DEPARTMENT_LOAD_START,
	EDIT_DEPARTMENT_LOAD_SUCCESS
} from './types';

import {IDepartment} from '../../../interfaces/models/IDepartment';


export const editDepartmentLoadStart = () => <const>({
	type: EDIT_DEPARTMENT_LOAD_START
});

export const editDepartmentLoadError = (error: string) => <const>({
	type: EDIT_DEPARTMENT_LOAD_ERROR,
	error
});

export const editDepartmentLoadSuccess = (department: IDepartment) => <const>({
	type: EDIT_DEPARTMENT_LOAD_SUCCESS,
	payload: department
});
