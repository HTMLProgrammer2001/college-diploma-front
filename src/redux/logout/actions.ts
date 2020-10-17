import {LOGOUT_ERROR, LOGOUT_SUCCESS, LOGOUT_START} from './types';


export const logoutStart = () => <const>({
	type: LOGOUT_START
});

export const logoutError = (error: string) => <const>({
	type: LOGOUT_ERROR,
	error
});

export const logoutSuccess = () => <const>({
	type: LOGOUT_SUCCESS
});
