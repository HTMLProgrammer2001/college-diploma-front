import {ILoginFormData} from '../../pages/LoginPage/LoginForm';
import {IProfileEditData} from '../../pages/ProfileEditPage/EditProfileForm';

import {ILoginResponse} from '../../interfaces/responses/ILoginResponse';
import {IMeResponse} from '../../interfaces/responses/IMeResponse';
import {IProfileEditResponse} from '../../interfaces/responses/IProfileEditResponse';

import createApi from './createApi';


const client = createApi({});

const userActionsApi = {
	async getMe(token: string){
		return await client.get<IMeResponse>('/me');
	},

	async login(credentials: ILoginFormData){
		return await client.post<ILoginResponse>('/login', credentials);
	},

	async logout(){
		return await client.post<{message: string}>('/logout', {});
	},

	async editProfile(vals: IProfileEditData | FormData){
		return await client.post<IProfileEditResponse>('/editMe', vals);
	}
};

export default userActionsApi;
