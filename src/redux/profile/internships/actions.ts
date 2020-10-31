import {
	PROFILE_INTERNSHIPS_CHANGE_SORT,
	PROFILE_INTERNSHIPS_ERROR,
	PROFILE_INTERNSHIPS_START,
	PROFILE_INTERNSHIPS_SUCCESS,
	PROFILE_INTERNSHIPS_HOURS
} from './types';

import {IProfileInternshipsResponse} from '../../../interfaces/responses/IProfileInternshipsResponse';


export const profileInternshipsStart = () => <const>({
	type: PROFILE_INTERNSHIPS_START
});

export const profileInternshipsError = (error: string) => <const>({
	type: PROFILE_INTERNSHIPS_ERROR,
	error
});

export const profileInternshipsSuccess = (internshipsResponse: IProfileInternshipsResponse) => <const>({
	type: PROFILE_INTERNSHIPS_SUCCESS,
	payload: internshipsResponse
});

export const profileInternshipsChangeSort = (field: string) => <const>({
	type: PROFILE_INTERNSHIPS_CHANGE_SORT,
	payload: field
});

export const profileInternshipsHours = (hours: number) => <const>({
	type: PROFILE_INTERNSHIPS_HOURS,
	payload: hours
});
