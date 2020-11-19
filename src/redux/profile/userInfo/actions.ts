import {
	PROFILE_USER_ERROR,
	PROFILE_USER_START,
	PROFILE_USER_SUCCESS
} from './types';
import {IUser} from '../../../interfaces/models/IUser';


export const profileUserStart = () => <const>({
	type: PROFILE_USER_START
});

export const profileUserSuccess = (user: IUser) => <const>({
	type: PROFILE_USER_SUCCESS,
	payload: user
});

export const profileUserError = (error: string) => <const>({
	type: PROFILE_USER_ERROR,
	error
});
