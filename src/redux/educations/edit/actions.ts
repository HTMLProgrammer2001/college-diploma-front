import {
	EDIT_EDUCATION_LOAD_ERROR,
	EDIT_EDUCATION_LOAD_START,
	EDIT_EDUCATION_LOAD_SUCCESS
} from './types';

import {IEducation} from '../../../interfaces/models/IEducation';


export const editEducationLoadStart = () => <const>({
	type: EDIT_EDUCATION_LOAD_START
});

export const editEducationLoadError = (error: string) => <const>({
	type: EDIT_EDUCATION_LOAD_ERROR,
	error
});

export const editEducationLoadSuccess = (education: IEducation) => <const>({
	type: EDIT_EDUCATION_LOAD_SUCCESS,
	payload: education
});
