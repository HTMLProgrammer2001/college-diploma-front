import {IUser} from '../models/IUser';


export type ILoginResponse = {
	token: string,
	user: IUser,
	message?: string
};
