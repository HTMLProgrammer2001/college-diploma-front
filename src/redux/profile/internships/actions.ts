import {
	PROFILE_INTERNSHIPS_CHANGE_SORT,
	PROFILE_INTERNSHIPS_ERROR,
	PROFILE_INTERNSHIPS_START,
	PROFILE_INTERNSHIPS_SUCCESS
} from './types';

import {IInternship} from '../../../interfaces/models/IInternship';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';


type IResponse = IGeneralPaginationResponse<IInternship>;

export const profileInternshipsStart = () => <const>({
	type: PROFILE_INTERNSHIPS_START
});

export const profileInternshipsError = (error: string) => <const>({
	type: PROFILE_INTERNSHIPS_ERROR,
	error
});

export const profileInternshipsSuccess = (internshipsResponse: IResponse) => <const>({
	type: PROFILE_INTERNSHIPS_SUCCESS,
	payload: internshipsResponse
});

export const profileInternshipsChangeSort = (field: string) => <const>({
	type: PROFILE_INTERNSHIPS_CHANGE_SORT,
	payload: field
});
