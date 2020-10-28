import {
	ALL_DEPARTMENTS_CHANGE_SORT,
	ALL_DEPARTMENTS_ERROR,
	ALL_DEPARTMENTS_START,
	ALL_DEPARTMENTS_SUCCESS
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IDepartment} from '../../../interfaces/models/IDepartment';


type IResponse = IGeneralPaginationResponse<IDepartment>;

export const allDepartmentsStart = () => <const>({
	type: ALL_DEPARTMENTS_START
});

export const allDepartmentsError = (error: string) => <const>({
	type: ALL_DEPARTMENTS_ERROR,
	error
});

export const allDepartmentsSuccess = (departmentsResponse: IResponse) => <const>({
	type: ALL_DEPARTMENTS_SUCCESS,
	payload: departmentsResponse
});

export const allDepartmentsChangeSort = (field: string) => <const>({
	type: ALL_DEPARTMENTS_CHANGE_SORT,
	payload: field
});
