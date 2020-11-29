import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {ICommission} from '../../../interfaces/models/ICommission';
import {ICommissionsAddData} from '../../../pages/Commissions/add/AddCommissionForm';
import {ICommissionsEditData} from '../../../pages/Commissions/edit/EditCommissionForm';

import objToParams from '../../helpers/objToParams';
import createApi from '../../helpers/createApi';


const client = createApi({
	baseURL: '/commissions'
});

const commissionsApi = {
	async getCommissions(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<ICommission>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getCommission(id: number) {
		return await client.get<{data: ICommission}>(`/${id}`);
	},

	async editCommission(id: number, vals: ICommissionsEditData) {
		return await client.put<ICommission>(`/${id}`, vals);
	},

	async deleteCommission(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addCommission(vals: ICommissionsAddData) {
		return await client.post('/add', vals);
	}
};

export default commissionsApi;
