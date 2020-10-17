import {ME_LOAD_ERROR, ME_LOAD_START, ME_LOAD_SUCCESS} from './types';
import {IUser} from '../../interfaces/IUser';


export const meLoadStart = () => <const>({
	type: ME_LOAD_START
});

export const meLoadError = (error: string) => <const>({
	type: ME_LOAD_ERROR,
	error
});

export const meLoadSuccess = (user: IUser) => <const>({
	type: ME_LOAD_SUCCESS,
	payload: user
});
