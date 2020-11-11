import axios from 'axios';

import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IQualification} from '../../../interfaces/models/IQualification';

import objToParams from '../../helpers/objToParams';


const client = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/qualifications`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

const qualificationsApi = {
	async getQualifications(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IQualification>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getQualification(id: number) {
		return await client.get<{data: IQualification}>(`/${id}`);
	},

	async editQualification(id: number, vals: any) {
		return await client.put<IQualification>(`/${id}`, vals);
	},

	async deleteQualification(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addQualification(vals: any) {
		return await client.post('/add', vals);
	},

	async importQualifications(vals: any){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	}
};

export default qualificationsApi;
