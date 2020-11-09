import {
	DELETE_INTERNSHIP_ERROR,
	DELETE_INTERNSHIP_START,
	DELETE_INTERNSHIP_SUCCESS
} from './types';


export const deleteInternshipStart = (id: number) => <const>({
	type: DELETE_INTERNSHIP_START,
	payload: id
});

export const deleteInternshipError = (id: number, error: string) => <const>({
	type: DELETE_INTERNSHIP_ERROR,
	error,
	payload: id
});

export const deleteInternshipSuccess = (id: number) => <const>({
	type: DELETE_INTERNSHIP_SUCCESS,
	payload: id
});
