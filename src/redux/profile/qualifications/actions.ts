import {
	PROFILE_QUALIFICATIONS_CHANGE_SORT,
	PROFILE_QUALIFICATIONS_ERROR,
	PROFILE_QUALIFICATIONS_START,
	PROFILE_QUALIFICATIONS_SUCCESS
} from './types';
import {IQualification} from '../../../interfaces/IQualification';


export const profileQualificationsStart = () => <const>({
	type: PROFILE_QUALIFICATIONS_START
});

export const profileQualificationsError = (error: string) => <const>({
	type: PROFILE_QUALIFICATIONS_ERROR,
	error
});

export const profileQualificationsSuccess = (qualifications: IQualification[]) => <const>({
	type: PROFILE_QUALIFICATIONS_SUCCESS,
	payload: qualifications
});

export const profileQualificationsChangeSort = (field: string) => <const>({
	type: PROFILE_QUALIFICATIONS_CHANGE_SORT,
	payload: field
});
