import {
	EDIT_INTERNSHIP_LOAD_ERROR,
	EDIT_INTERNSHIP_LOAD_START,
	EDIT_INTERNSHIP_LOAD_SUCCESS
} from './types';

import {IInternship} from '../../../interfaces/models/IInternship';


export const editInternshipLoadStart = () => <const>({
	type: EDIT_INTERNSHIP_LOAD_START
});

export const editInternshipLoadError = (error: string) => <const>({
	type: EDIT_INTERNSHIP_LOAD_ERROR,
	error
});

export const editInternshipLoadSuccess = (internship: IInternship) => <const>({
	type: EDIT_INTERNSHIP_LOAD_SUCCESS,
	payload: internship
});
