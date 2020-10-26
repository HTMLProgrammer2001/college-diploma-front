import {
	PROFILE_REBUKES_CHANGE_SORT,
	PROFILE_REBUKES_ERROR,
	PROFILE_REBUKES_START,
	PROFILE_REBUKES_SUCCESS
} from './types';

import {IRebuke} from '../../../interfaces/models/IRebuke';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';


type IResponse = IGeneralPaginationResponse<IRebuke>;

export const profileRebukesStart = () => <const>({
	type: PROFILE_REBUKES_START
});

export const profileRebukesError = (error: string) => <const>({
	type: PROFILE_REBUKES_ERROR,
	error
});

export const profileRebukesSuccess = (rebukesResponse: IResponse) => <const>({
	type: PROFILE_REBUKES_SUCCESS,
	payload: rebukesResponse
});

export const profileRebukesChangeSort = (field: string) => <const>({
	type: PROFILE_REBUKES_CHANGE_SORT,
	payload: field
});
