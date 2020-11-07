import {
	DELETE_EDUCATION_ERROR,
	DELETE_EDUCATION_START,
	DELETE_EDUCATION_SUCCESS
} from './types';


export const deleteEducationStart = (id: number) => <const>({
	type: DELETE_EDUCATION_START,
	payload: id
});

export const deleteEducationError = (id: number, error: string) => <const>({
	type: DELETE_EDUCATION_ERROR,
	error,
	payload: id
});

export const deleteEducationSuccess = (id: number) => <const>({
	type: DELETE_EDUCATION_SUCCESS,
	payload: id
});
