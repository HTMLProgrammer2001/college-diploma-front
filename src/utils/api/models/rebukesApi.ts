import axios from 'axios';

import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';

import objToParams from '../../helpers/objToParams';
import {IRebuke} from '../../../interfaces/models/IRebuke';
import {IRebukesEditData} from '../../../pages/Rebukes/edit/EditRebukeForm';
import {IRebukesAddData} from '../../../pages/Rebukes/add/AddRebukeForm';
import {IRebukesImportData} from '../../../pages/Rebukes/import/ImportRebukesForm';


const client = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/rebukes`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

const rebukesApi = {
	async getRebukes(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IRebuke>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getRebuke(id: number) {
		return await client.get<{data: IRebuke}>(`/${id}`);
	},

	async editRebuke(id: number, vals: IRebukesEditData) {
		return await client.put<IRebuke>(`/${id}`, vals);
	},

	async deleteRebuke(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addRebuke(vals: IRebukesAddData) {
		return await client.post('/add', vals);
	},

	async importRebukes(vals: IRebukesImportData){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	}
};

export default rebukesApi;