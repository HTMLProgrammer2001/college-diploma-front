import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IEducation} from '../../../interfaces/models/IEducation';

import objToParams from '../../helpers/objToParams';
import createApi from '../createApi';


const client = createApi({
	baseURL: '/educations'
});

const educationsApi = {
	async getEducations(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IEducation>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getEducation(id: number) {
		return await client.get<{data: IEducation}>(`/${id}`);
	},

	async editEducation(id: number, vals: any) {
		return await client.put<IEducation>(`/${id}`, vals);
	},

	async deleteEducation(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addEducation(vals: any) {
		return await client.post('/add', vals);
	},

	async importEducations(vals: any){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	}
};

export default educationsApi;
