import {
	ALL_QUALIFICATIONS_CHANGE_SORT,
	ALL_QUALIFICATIONS_ERROR,
	ALL_QUALIFICATIONS_START,
	ALL_QUALIFICATIONS_SUCCESS,
	ALL_QUALIFICATIONS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IQualification} from '../../../interfaces/models/IQualification';


type IResponse = IGeneralPaginationResponse<IQualification>;

export const allQualificationsStart = () => <const>({
	type: ALL_QUALIFICATIONS_START
});

export const allQualificationsError = (error: string) => <const>({
	type: ALL_QUALIFICATIONS_ERROR,
	error
});

export const allQualificationsSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_QUALIFICATIONS_SUCCESS,
	payload: ranksResponse
});

export const allQualificationsChangeSort = (field: string) => <const>({
	type: ALL_QUALIFICATIONS_CHANGE_SORT,
	payload: field
});

export const allQualificationsDelete = (id: number) => <const>({
	type: ALL_QUALIFICATIONS_DELETE,
	payload: id
});
