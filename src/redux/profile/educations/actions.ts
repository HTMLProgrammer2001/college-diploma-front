import {
	PROFILE_EDUCATIONS_CHANGE_SORT,
	PROFILE_EDUCATIONS_ERROR,
	PROFILE_EDUCATIONS_START,
	PROFILE_EDUCATIONS_SUCCESS
} from './types';
import {IEducation} from '../../../interfaces/models/IEducation';


export const profileEducationsStart = () => <const>({
	type: PROFILE_EDUCATIONS_START
});

export const profileEducationsError = (error: string) => <const>({
	type: PROFILE_EDUCATIONS_ERROR,
	error
});

export const profileEducationsSuccess = (educations: IEducation[]) => <const>({
	type: PROFILE_EDUCATIONS_SUCCESS,
	payload: educations
});

export const profileEducationsChangeSort = (field: string) => <const>({
	type: PROFILE_EDUCATIONS_CHANGE_SORT,
	payload: field
});
