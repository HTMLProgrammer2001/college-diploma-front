import axios from 'axios';

import {IGeneralPaginationResponse} from '../../interfaces/responses/IGeneralPaginationResponse';
import {IPublication} from '../../interfaces/models/IPublication';
import {IProfilePublicationsFilterData} from '../../pages/ProfilePage/ProfileTabs/PublicationsTab/PublicationsFilterForm';
import {ISort} from '../../interfaces/ISort';
import objToParams from '../helpers/objToParams';
import {IEducation} from '../../interfaces/models/IEducation';


const client = axios.create({
	baseURL: 'http://localhost:8000/api/profile',
	headers: {'Access-Control-Allow-Origin': '*'}
});

const profileApi = {
	async getPublications(filters: IProfilePublicationsFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IPublication>>('/publications', {
			params: {...filters, ...sortRules, page, pageSize},
			headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
		});
	},

	async getEducations(filters: any, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IEducation>>('/educations', {
			params: {...filters, ...sortRules, page, pageSize},
			headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
		});
	}
};

export default profileApi;
