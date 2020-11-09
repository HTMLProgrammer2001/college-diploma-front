import {
	INTERNSHIP_SINGLE_ERROR,
	INTERNSHIP_SINGLE_START,
	INTERNSHIP_SINGLE_SUCCESS
} from './types';
import {IInternship} from '../../../interfaces/models/IInternship';


export const internshipSingleStart = () => <const>({
	type: INTERNSHIP_SINGLE_START
});

export const internshipSingleError = (error: string) => <const>({
	type: INTERNSHIP_SINGLE_ERROR,
	error
});

export const internshipSingleSuccess = (internship: IInternship) => <const>({
	type: INTERNSHIP_SINGLE_SUCCESS,
	payload: internship
});
