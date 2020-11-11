import {
	QUALIFICATION_SINGLE_ERROR,
	QUALIFICATION_SINGLE_START,
	QUALIFICATION_SINGLE_SUCCESS
} from './types';
import {IQualification} from '../../../interfaces/models/IQualification';


export const qualificationSingleStart = () => <const>({
	type: QUALIFICATION_SINGLE_START
});

export const qualificationSingleError = (error: string) => <const>({
	type: QUALIFICATION_SINGLE_ERROR,
	error
});

export const qualificationSingleSuccess = (qualification: IQualification) => <const>({
	type: QUALIFICATION_SINGLE_SUCCESS,
	payload: qualification
});
