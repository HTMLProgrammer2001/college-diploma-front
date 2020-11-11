import {
	EDIT_QUALIFICATION_LOAD_ERROR,
	EDIT_QUALIFICATION_LOAD_START,
	EDIT_QUALIFICATION_LOAD_SUCCESS
} from './types';

import {IQualification} from '../../../interfaces/models/IQualification';


export const editQualificationLoadStart = () => <const>({
	type: EDIT_QUALIFICATION_LOAD_START
});

export const editQualificationLoadError = (error: string) => <const>({
	type: EDIT_QUALIFICATION_LOAD_ERROR,
	error
});

export const editQualificationLoadSuccess = (qualification: IQualification) => <const>({
	type: EDIT_QUALIFICATION_LOAD_SUCCESS,
	payload: qualification
});
