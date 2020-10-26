import {
	PROFILE_QUALIFICATIONS_CHANGE_SORT,
	PROFILE_QUALIFICATIONS_ERROR,
	PROFILE_QUALIFICATIONS_START,
	PROFILE_QUALIFICATIONS_SUCCESS
} from './types';
import {IQualification} from '../../../interfaces/models/IQualification';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';


type IResponse = IGeneralPaginationResponse<IQualification>;

export const profileQualificationsStart = () => <const>({
	type: PROFILE_QUALIFICATIONS_START
});

export const profileQualificationsError = (error: string) => <const>({
	type: PROFILE_QUALIFICATIONS_ERROR,
	error
});

export const profileQualificationsSuccess = (qualificationsResponse: IResponse) => <const>({
	type: PROFILE_QUALIFICATIONS_SUCCESS,
	payload: qualificationsResponse
});

export const profileQualificationsChangeSort = (field: string) => <const>({
	type: PROFILE_QUALIFICATIONS_CHANGE_SORT,
	payload: field
});
