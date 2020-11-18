import {
	EDIT_USER_LOAD_ERROR,
	EDIT_USER_LOAD_START,
	EDIT_USER_LOAD_SUCCESS
} from './types';

import {IUser} from '../../../interfaces/models/IUser';


export const editUserLoadStart = () => <const>({
	type: EDIT_USER_LOAD_START
});

export const editUserLoadError = (error: string) => <const>({
	type: EDIT_USER_LOAD_ERROR,
	error
});

export const editUserLoadSuccess = (user: IUser) => <const>({
	type: EDIT_USER_LOAD_SUCCESS,
	payload: user
});
