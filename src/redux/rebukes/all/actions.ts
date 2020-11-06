import {
	ALL_REBUKES_CHANGE_SORT,
	ALL_REBUKES_ERROR,
	ALL_REBUKES_START,
	ALL_REBUKES_SUCCESS,
	ALL_REBUKES_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IRebuke} from '../../../interfaces/models/IRebuke';


type IResponse = IGeneralPaginationResponse<IRebuke>;

export const allRebukesStart = () => <const>({
	type: ALL_REBUKES_START
});

export const allRebukesError = (error: string) => <const>({
	type: ALL_REBUKES_ERROR,
	error
});

export const allRebukesSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_REBUKES_SUCCESS,
	payload: ranksResponse
});

export const allRebukesChangeSort = (field: string) => <const>({
	type: ALL_REBUKES_CHANGE_SORT,
	payload: field
});

export const allRebukesDelete = (id: number) => <const>({
	type: ALL_REBUKES_DELETE,
	payload: id
});
