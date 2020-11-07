import {
	ALL_EDUCATIONS_CHANGE_SORT,
	ALL_EDUCATIONS_ERROR,
	ALL_EDUCATIONS_START,
	ALL_EDUCATIONS_SUCCESS,
	ALL_EDUCATIONS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IEducation} from '../../../interfaces/models/IEducation';


type IResponse = IGeneralPaginationResponse<IEducation>;

export const allEducationsStart = () => <const>({
	type: ALL_EDUCATIONS_START
});

export const allEducationsError = (error: string) => <const>({
	type: ALL_EDUCATIONS_ERROR,
	error
});

export const allEducationsSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_EDUCATIONS_SUCCESS,
	payload: ranksResponse
});

export const allEducationsChangeSort = (field: string) => <const>({
	type: ALL_EDUCATIONS_CHANGE_SORT,
	payload: field
});

export const allEducationsDelete = (id: number) => <const>({
	type: ALL_EDUCATIONS_DELETE,
	payload: id
});
