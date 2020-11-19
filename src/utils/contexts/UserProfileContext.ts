import {createContext} from 'react';

import {IUser} from '../../interfaces/models/IUser';


export type IUserProfileContextData = {
	user: IUser,
	isProfile: boolean
};
const defaultData: IUserProfileContextData = {
	user: null,
	isProfile: false
};
const UserProfileContext = createContext<IUserProfileContextData>(defaultData);

export default UserProfileContext;
