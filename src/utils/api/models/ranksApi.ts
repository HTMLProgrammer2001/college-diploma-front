import axios from 'axios';

import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IRank} from '../../../interfaces/models/IRank';

import objToParams from '../../helpers/objToParams';


const client = axios.create({
	baseURL: 'http://localhost:8000/api/ranks',
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

const ranksApi = {
	async getRanks(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IRank>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getRank(id: number) {
		return await client.get<{data: IRank}>(`/${id}`);
	},

	async editRank(id: number, vals: any) {
		return await client.put<IRank>(`/${id}`, vals);
	},

	async deleteRank(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addRank(vals: any) {
		return await client.post('/add', vals);
	}
};

export default ranksApi;
