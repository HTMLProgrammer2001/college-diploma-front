import axios from 'axios';

import {ILoginFormData} from '../../pages/LoginPage/LoginForm';
import {IProfileEditData} from '../../pages/ProfileEditPage/EditProfileForm';

import {ILoginResponse} from '../../interfaces/responses/ILoginResponse';
import {IMeResponse} from '../../interfaces/responses/IMeResponse';
import {IProfileEditResponse} from '../../interfaces/responses/IProfileEditResponse';


const client = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
});

const userActionsApi = {
	async getMe(token: string){
		return await client.get<IMeResponse>('/me', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	},

	async login(credentials: ILoginFormData){
		return await client.post<ILoginResponse>('/login', credentials);
	},

	async logout(){
		return await client.post<{message: string}>('/logout', {}, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	async editProfile(vals: IProfileEditData | FormData){
		return await client.post<IProfileEditResponse>('/editMe', vals, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	}
};

export default userActionsApi;
