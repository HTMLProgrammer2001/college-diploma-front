import {
	PROFILE_EDUCATIONS_CHANGE_SORT,
	PROFILE_EDUCATIONS_ERROR,
	PROFILE_EDUCATIONS_START,
	PROFILE_EDUCATIONS_SUCCESS
} from './types';
import {IEducation} from '../../../interfaces/models/IEducation';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';


type IResponse = IGeneralPaginationResponse<IEducation>;

export const profileEducationsStart = () => <const>({
	type: PROFILE_EDUCATIONS_START
});

export const profileEducationsError = (error: string) => <const>({
	type: PROFILE_EDUCATIONS_ERROR,
	error
});

export const profileEducationsSuccess = (educationResponse: IResponse) => <const>({
	type: PROFILE_EDUCATIONS_SUCCESS,
	payload: educationResponse
});

export const profileEducationsChangeSort = (field: string) => <const>({
	type: PROFILE_EDUCATIONS_CHANGE_SORT,
	payload: field
});
