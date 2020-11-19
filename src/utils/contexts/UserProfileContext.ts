import {createContext} from 'react';

import {IUser} from '../../interfaces/models/IUser';


export type IUserProfileContextData = IUser;
const defaultData: IUserProfileContextData = null;
const UserProfileContext = createContext<IUserProfileContextData>(defaultData);

export default UserProfileContext;
