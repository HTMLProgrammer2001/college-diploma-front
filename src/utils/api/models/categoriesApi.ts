import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {ICategory} from '../../../interfaces/models/ICategory';
import {ICategoriesEditData} from '../../../pages/Categories/edit/EditCategoryForm';

import createApi from '../../helpers/createApi';
import objToParams from '../../helpers/objToParams';


const client = createApi({
	baseURL: '/categories'
});

const categoriesApi = {
	async getCategories(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<ICategory>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getCategory(id: number) {
		return await client.get<{data: ICategory}>(`/${id}`);
	},

	async editCategory(id: number, vals: ICategoriesEditData) {
		return await client.put<ICategory>(`/${id}`, vals);
	},

	async deleteCategory(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addCategory(vals: any) {
		return await client.post('/add', vals);
	}
};

export default categoriesApi;
