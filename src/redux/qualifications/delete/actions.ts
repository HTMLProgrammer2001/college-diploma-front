import {
	DELETE_QUALIFICATION_ERROR,
	DELETE_QUALIFICATION_START,
	DELETE_QUALIFICATION_SUCCESS
} from './types';


export const deleteQualificationStart = (id: number) => <const>({
	type: DELETE_QUALIFICATION_START,
	payload: id
});

export const deleteQualificationError = (id: number, error: string) => <const>({
	type: DELETE_QUALIFICATION_ERROR,
	error,
	payload: id
});

export const deleteQualificationSuccess = (id: number) => <const>({
	type: DELETE_QUALIFICATION_SUCCESS,
	payload: id
});
