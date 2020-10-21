import axios, {AxiosResponse} from 'axios';

import {IUser} from '../../interfaces/models/IUser';


const client = axios.create({
	baseURL: 'https://localhost:8000/api'
});

const userActionsApi = {
	async getMe(token: string): Promise<AxiosResponse<IUser>>{
		return await axios.get<IUser>('/me', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}
};

export default userActionsApi;
