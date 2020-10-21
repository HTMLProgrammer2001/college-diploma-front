import {
	INTERNSHIPS_SHOW_ERROR,
	INTERNSHIPS_SHOW_START,
	INTERNSHIPS_SHOW_SUCCESS,
	INTERNSHIPS_SHOW_CHANGE_SORT
} from './types';
import {IInternship} from '../../../interfaces/models/IInternship';


export const internshipsShowStart = () => <const>({
	type: INTERNSHIPS_SHOW_START
});

export const internshipsShowError = (error: string) => <const>({
	type: INTERNSHIPS_SHOW_ERROR,
	error
});

export const internshipsShowSuccess = (internships: IInternship[]) => <const>({
	type: INTERNSHIPS_SHOW_SUCCESS,
	payload: internships
});

export const internshipsShowChangeSort = (field: string) => <const>({
	type: INTERNSHIPS_SHOW_CHANGE_SORT,
	payload: field
});
