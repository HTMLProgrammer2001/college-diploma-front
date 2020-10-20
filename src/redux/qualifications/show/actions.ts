import {
	QUALIFICATIONS_SHOW_ERROR,
	QUALIFICATIONS_SHOW_START,
	QUALIFICATIONS_SHOW_SUCCESS,
	QUALIFICATIONS_SHOW_CHANGE_SORT
} from './types';
import {IQualification} from '../../../interfaces/IQualification';


export const qualificationsShowStart = () => <const>({
	type: QUALIFICATIONS_SHOW_START
});

export const qualificationsShowError = (error: string) => <const>({
	type: QUALIFICATIONS_SHOW_ERROR,
	error
});

export const qualificationsShowSuccess = (qualifications: IQualification[]) => <const>({
	type: QUALIFICATIONS_SHOW_SUCCESS,
	payload: qualifications
});

export const qualificationsShowChangeSort = (field: string) => <const>({
	type: QUALIFICATIONS_SHOW_CHANGE_SORT,
	payload: field
});
