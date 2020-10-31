import {
	ALL_RANKS_CHANGE_SORT,
	ALL_RANKS_ERROR,
	ALL_RANKS_START,
	ALL_RANKS_SUCCESS,
	ALL_RANKS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IRank} from '../../../interfaces/models/IRank';


type IResponse = IGeneralPaginationResponse<IRank>;

export const allRanksStart = () => <const>({
	type: ALL_RANKS_START
});

export const allRanksError = (error: string) => <const>({
	type: ALL_RANKS_ERROR,
	error
});

export const allRanksSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_RANKS_SUCCESS,
	payload: ranksResponse
});

export const allRanksChangeSort = (field: string) => <const>({
	type: ALL_RANKS_CHANGE_SORT,
	payload: field
});

export const allRanksDelete = (id: number) => <const>({
	type: ALL_RANKS_DELETE,
	payload: id
});
