import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';

import {IUser} from '../../../interfaces/models/IUser';
import {IUserTable} from '../../../interfaces/models/IUserTable';
import {IExample} from '../../../interfaces/IExample';

import objToParams from '../../helpers/objToParams';
import createApi from '../../helpers/createApi';
import download from '../../helpers/download';


const client = createApi({
	baseURL: '/users'
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
	},

	async importUsers(vals: any){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	},

	downloadExample(): IExample{
		return download(`${process.env.REACT_APP_SERVER_URL}/examples/users`);
	}
};

export default usersApi;
