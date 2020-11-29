import {ISort} from '../../../interfaces/ISort';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IPublication} from '../../../interfaces/models/IPublication';
import {IExample} from '../../../interfaces/IExample';

import {IPublicationsAddData} from '../../../pages/Publications/add/AddPublicationForm';
import {IPublicationsImportData} from '../../../pages/Publications/import/ImportPublicationsForm';

import objToParams from '../../helpers/objToParams';
import createApi from '../../helpers/createApi';
import download from '../../helpers/download';


const client = createApi({
	baseURL: '/publications'
});

const publicationsApi = {
	async getPublications(filters: any = {}, sort: ISort[] = [], page = 1, pageSize = 5) {
		const sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IPublication>>('/', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getPublication(id: number) {
		return await client.get<{data: IPublication}>(`/${id}`);
	},

	async editPublication(id: number, vals: any) {
		return await client.put<IPublication>(`/${id}`, vals);
	},

	async deletePublication(id: number) {
		return await client.delete<{ message: string }>(`/${id}`);
	},

	async addPublication(vals: IPublicationsAddData) {
		return await client.post('/add', vals);
	},

	async importPublications(vals: IPublicationsImportData | FormData){
		let formData = new FormData();

		for(let key in vals){
			formData.append(key, (vals as any)[key]);
		}

		return await client.post('/import', formData);
	},

	downloadExample(): IExample{
		return download(`${process.env.REACT_APP_SERVER_URL}/examples/publications`);
	}
};

export default publicationsApi;
