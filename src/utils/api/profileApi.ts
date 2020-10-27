import axios, {AxiosInstance} from 'axios';

import objToParams from '../helpers/objToParams';

import {IGeneralPaginationResponse} from '../../interfaces/responses/IGeneralPaginationResponse';
import {IPublication} from '../../interfaces/models/IPublication';
import {IProfilePublicationsFilterData} from '../../pages/ProfilePage/ProfileTabs/PublicationsTab/PublicationsFilterForm';
import {ISort} from '../../interfaces/ISort';
import {IEducation} from '../../interfaces/models/IEducation';
import {IProfileEducationsFilterData} from '../../pages/ProfilePage/ProfileTabs/EducationsTab/EducationsFilterForm';
import {IProfileHonorsFilterData} from '../../pages/ProfilePage/ProfileTabs/HonorsTab/HonorsFilterForm';
import {IHonor} from '../../interfaces/models/IHonor';
import {IProfileRebukesFilterData} from '../../pages/ProfilePage/ProfileTabs/RebukesTab/RebukesFilterForm';
import {IRebuke} from '../../interfaces/models/IRebuke';
import {IQualification} from '../../interfaces/models/IQualification';
import {IProfileQualificationsFilterData} from '../../pages/ProfilePage/ProfileTabs/QualificationsTab/QualificationsFilterForm';
import {IProfileInternshipsFilterData} from '../../pages/ProfilePage/ProfileTabs/InternshipsTab/InternshipsFilterForm';
import {IInternship} from '../../interfaces/models/IInternship';


let client: AxiosInstance;

const profileApi = {
	async getPublications(filters: IProfilePublicationsFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IPublication>>('/publications', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getEducations(filters: IProfileEducationsFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IEducation>>('/educations', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getHonors(filters: IProfileHonorsFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IHonor>>('/honors', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getRebukes(filters: IProfileRebukesFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IRebuke>>('/rebukes', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getQualifications(filters: IProfileQualificationsFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IQualification>>('/qualifications', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getInternships(filters: IProfileInternshipsFilterData, sort: ISort[], page = 1, pageSize = 5){
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IInternship>>('/internships', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	}
};

// proxy api calls to add authorization header
let proxyProfileApi = new Proxy<typeof profileApi>(profileApi, {
	get(target: typeof profileApi, prop: keyof typeof profileApi) {
		client = axios.create({
			baseURL: 'http://localhost:8000/api/profile',
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});

		return target[prop];
	}
});

export default proxyProfileApi;
