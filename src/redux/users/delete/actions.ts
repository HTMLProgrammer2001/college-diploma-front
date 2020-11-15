import {
	DELETE_USER_ERROR,
	DELETE_USER_START,
	DELETE_USER_SUCCESS
} from './types';


export const deleteUserStart = (id: number) => <const>({
	type: DELETE_USER_START,
	payload: id
});

export const deleteUserError = (id: number, error: string) => <const>({
	type: DELETE_USER_ERROR,
	error,
	payload: id
});

export const deleteUserSuccess = (id: number) => <const>({
	type: DELETE_USER_SUCCESS,
	payload: id
});
