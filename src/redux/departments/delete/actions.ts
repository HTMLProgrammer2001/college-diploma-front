import {
	DELETE_DEPARTMENT_ERROR,
	DELETE_DEPARTMENT_START,
	DELETE_DEPARTMENT_SUCCESS
} from './types';


export const deleteDepartmentStart = (id: number) => <const>({
	type: DELETE_DEPARTMENT_START,
	payload: id
});

export const deleteDepartmentError = (id: number, error: string) => <const>({
	type: DELETE_DEPARTMENT_ERROR,
	error,
	payload: id
});

export const deleteDepartmentSuccess = (id: number) => <const>({
	type: DELETE_DEPARTMENT_SUCCESS,
	payload: id
});
