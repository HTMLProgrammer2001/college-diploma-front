import axios from 'axios';

import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';

import objToParams from '../../helpers/objToParams';
import {IHonor} from '../../../interfaces/models/IHonor';
import {IHonorsAddData} from '../../../pages/Honors/add/AddHonorForm';
import {IHonorsImportData} from '../../../pages/Honors/import/ImportHonorsForm';
import {IHonorsEditData} from '../../../pages/Honors/edit/EditHonorForm';


const client = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/honors`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

const honorsApi = {
	async getHonors(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IHonor>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getHonor(id: number) {
		return await client.get<{data: IHonor}>(`/${id}`);
	},

	async editHonor(id: number, vals: IHonorsEditData) {
		return await client.put<IHonor>(`/${id}`, vals);
	},

	async deleteHonor(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addHonor(vals: IHonorsAddData) {
		return await client.post('/add', vals);
	},

	async importHonors(vals: IHonorsImportData){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	}
};

export default honorsApi;
