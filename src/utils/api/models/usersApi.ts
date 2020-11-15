import axios from 'axios';

import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';

import objToParams from '../../helpers/objToParams';
import {IUser} from '../../../interfaces/models/IUser';
import {IUserTable} from '../../../interfaces/models/IUserTable';


const client = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/users`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

const usersApi = {
	async getUsers(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IUserTable>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getUser(id: number) {
		return await client.get<{data: IUser}>(`/${id}`);
	},

	async editUser(id: number, vals: any) {
		return await client.put<IUser>(`/${id}`, vals);
	},

	async deleteUser(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addUser(vals: any) {
		return await client.post('/add', vals);
	}
};

export default usersApi;
