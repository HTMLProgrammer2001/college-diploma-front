import {
	EDUCATION_SINGLE_ERROR,
	EDUCATION_SINGLE_START,
	EDUCATION_SINGLE_SUCCESS
} from './types';
import {IEducation} from '../../../interfaces/models/IEducation';


export const educationSingleStart = () => <const>({
	type: EDUCATION_SINGLE_START
});

export const educationSingleError = (error: string) => <const>({
	type: EDUCATION_SINGLE_ERROR,
	error
});

export const educationSingleSuccess = (education: IEducation) => <const>({
	type: EDUCATION_SINGLE_SUCCESS,
	payload: education
});
