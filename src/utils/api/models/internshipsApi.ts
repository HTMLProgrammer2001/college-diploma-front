import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IInternship} from '../../../interfaces/models/IInternship';

import objToParams from '../../helpers/objToParams';
import createApi from '../createApi';


const client = createApi({
	baseURL: '/internships'
});

const internshipsApi = {
	async getInternships(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IInternship>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getInternship(id: number) {
		return await client.get<{data: IInternship}>(`/${id}`);
	},

	async editInternship(id: number, vals: any) {
		return await client.put<IInternship>(`/${id}`, vals);
	},

	async deleteInternship(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addInternship(vals: any) {
		return await client.post('/add', vals);
	},

	async importInternships(vals: any){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	}
};

export default internshipsApi;
