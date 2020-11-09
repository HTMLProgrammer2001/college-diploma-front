import {
	ALL_INTERNSHIPS_CHANGE_SORT,
	ALL_INTERNSHIPS_ERROR,
	ALL_INTERNSHIPS_START,
	ALL_INTERNSHIPS_SUCCESS,
	ALL_INTERNSHIPS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IInternship} from '../../../interfaces/models/IInternship';


type IResponse = IGeneralPaginationResponse<IInternship>;

export const allInternshipsStart = () => <const>({
	type: ALL_INTERNSHIPS_START
});

export const allInternshipsError = (error: string) => <const>({
	type: ALL_INTERNSHIPS_ERROR,
	error
});

export const allInternshipsSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_INTERNSHIPS_SUCCESS,
	payload: ranksResponse
});

export const allInternshipsChangeSort = (field: string) => <const>({
	type: ALL_INTERNSHIPS_CHANGE_SORT,
	payload: field
});

export const allInternshipsDelete = (id: number) => <const>({
	type: ALL_INTERNSHIPS_DELETE,
	payload: id
});
