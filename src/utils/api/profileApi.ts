import axios from 'axios';
import {IGeneralPaginationResponse} from '../../interfaces/responses/IGeneralPaginationResponse';
import {IPublication} from '../../interfaces/models/IPublication';
import {IProfilePublicationsFilterData} from '../../pages/ProfilePage/ProfileTabs/PublicationsTab/PublicationsFilterForm';


const client = axios.create({
	baseURL: 'http://localhost:8000/api/profile',
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
});

const profileApi = {
	async getPublications(filters: IProfilePublicationsFilterData, sort: Object, page = 1, pageSize = 5){
		return await client.get<IGeneralPaginationResponse<IPublication>>('/publications', {
			params: {...filters, ...sort, page, pageSize},
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
		})
	}
};

export default profileApi;

