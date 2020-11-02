import axios from 'axios';

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
import {IProfileQualificationsFilterData} from '../../pages/ProfilePage/ProfileTabs/QualificationsTab/QualificationsFilterForm';
import {IProfileInternshipsFilterData} from '../../pages/ProfilePage/ProfileTabs/InternshipsTab/InternshipsFilterForm';

import objToParams from '../helpers/objToParams';
import {IProfileInternshipsResponse} from '../../interfaces/responses/IProfileInternshipsResponse';
import {IProfileQualificationsResponse} from '../../interfaces/responses/IProfileQualificationsResponse';


const client = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/profile`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

const profileApi = {
	async getPublications(filters: IProfilePublicationsFilterData, sort: ISort[], page = 1, pageSize = 5) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IPublication>>('/publications', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getEducations(filters: IProfileEducationsFilterData, sort: ISort[], page = 1, pageSize = 5) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IEducation>>('/educations', {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getHonors(filters: IProfileHonorsFilterData, sort: ISort[], page = 1, pageSize = 5) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IHonor>>('/honors', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getRebukes(filters: IProfileRebukesFilterData, sort: ISort[], page = 1, pageSize = 5) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IRebuke>>('/rebukes', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getQualifications(filters: IProfileQualificationsFilterData, sort: ISort[], page = 1, pageSize = 5) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IProfileQualificationsResponse>('/qualifications', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getInternships(filters: IProfileInternshipsFilterData, sort: ISort[], page = 1, pageSize = 5) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IProfileInternshipsResponse>('/internships', {
			params: {...filters, ...sortRules, page, pageSize}
		})
	}
};

export default profileApi;
