import {
	USER_MODAL_ERROR,
	USER_MODAL_START,
	USER_MODAL_SUCCESS,
	USER_MODAL_SET_NAME
} from './types';
import {IUser} from '../../../interfaces/models/IUser';


export const userModalStart = () => <const>({
	type: USER_MODAL_START
});

export const userModalError = (error: string) => <const>({
	type: USER_MODAL_ERROR,
	error
});

export const userModalSuccess = (user: IUser) => <const>({
	type: USER_MODAL_SUCCESS,
	payload: user
});

export const userModalSetName = (name: string) => <const>({
	type: USER_MODAL_SET_NAME,
	payload: name
});
