import {
	PROFILE_QUALIFICATIONS_CHANGE_SORT,
	PROFILE_QUALIFICATIONS_ERROR,
	PROFILE_QUALIFICATIONS_START,
	PROFILE_QUALIFICATIONS_SUCCESS,
	PROFILE_QUALIFICATIONS_SET_NEXT
} from './types';
import {IProfileQualificationsResponse} from '../../../interfaces/responses/IProfileQualificationsResponse';


export const profileQualificationsStart = () => <const>({
	type: PROFILE_QUALIFICATIONS_START
});

export const profileQualificationsError = (error: string) => <const>({
	type: PROFILE_QUALIFICATIONS_ERROR,
	error
});

export const profileQualificationsSuccess = (qualificationsResponse: IProfileQualificationsResponse) => <const>({
	type: PROFILE_QUALIFICATIONS_SUCCESS,
	payload: qualificationsResponse
});

export const profileQualificationsChangeSort = (field: string) => <const>({
	type: PROFILE_QUALIFICATIONS_CHANGE_SORT,
	payload: field
});

export const profileQualificationsSetNext = (next: string) => <const>({
	type: PROFILE_QUALIFICATIONS_SET_NEXT,
	payload: next
});
