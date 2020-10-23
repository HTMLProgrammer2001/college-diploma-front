import axios, {AxiosResponse} from 'axios';

import {IUser} from '../../interfaces/models/IUser';
import {ILoginFormData} from '../../pages/LoginPage/LoginForm';
import {ILoginResponse} from '../../interfaces/responses/ILoginResponse';


const client = axios.create({
	baseURL: 'http://localhost:8000/api',
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
});

const userActionsApi = {
	async getMe(token: string): Promise<AxiosResponse<IUser>>{
		return await client.get<IUser>('/me', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	},

	async login(credentials: ILoginFormData): Promise<AxiosResponse<ILoginResponse>>{
		return await client.post<ILoginResponse>('/login', credentials);
	}
};

export default userActionsApi;
