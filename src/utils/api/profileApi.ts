import {IGeneralPaginationResponse} from '../../interfaces/responses/IGeneralPaginationResponse';
import {IPublication} from '../../interfaces/models/IPublication';
import {IProfilePublicationsFilterData} from '../../pages/ProfilePage/ProfileTabs/PublicationsTab/PublicationsFilterForm';
import {IEducation} from '../../interfaces/models/IEducation';
import {IProfileEducationsFilterData} from '../../pages/ProfilePage/ProfileTabs/EducationsTab/EducationsFilterForm';
import {IProfileHonorsFilterData} from '../../pages/ProfilePage/ProfileTabs/HonorsTab/HonorsFilterForm';
import {IHonor} from '../../interfaces/models/IHonor';
import {IProfileRebukesFilterData} from '../../pages/ProfilePage/ProfileTabs/RebukesTab/RebukesFilterForm';
import {IRebuke} from '../../interfaces/models/IRebuke';
import {IProfileQualificationsFilterData} from '../../pages/ProfilePage/ProfileTabs/QualificationsTab/QualificationsFilterForm';
import {IProfileInternshipsFilterData} from '../../pages/ProfilePage/ProfileTabs/InternshipsTab/InternshipsFilterForm';
import {IProfileInternshipsResponse} from '../../interfaces/responses/IProfileInternshipsResponse';
import {IProfileQualificationsResponse} from '../../interfaces/responses/IProfileQualificationsResponse';

import objToParams from '../helpers/objToParams';
import {IGetModelProfile} from '../../interfaces/IGetModelProfile';
import createApi from './createApi';


const client = createApi({
	baseURL: '/profile'
});

const profileApi = {
	async getPublications({filters, sort,
					page = 1, pageSize = 5, user}: IGetModelProfile<IProfilePublicationsFilterData>) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IPublication>>(`/publications/${user}`, {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getEducations({filters, sort, page = 1, pageSize = 5, user}: IGetModelProfile<IProfileEducationsFilterData>) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IEducation>>(`/educations/${user}`, {
			params: {...filters, ...sortRules, page, pageSize}
		});
	},

	async getHonors({filters, sort, user, pageSize, page}: IGetModelProfile<IProfileHonorsFilterData>) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IHonor>>(`/honors/${user}`, {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getRebukes({filters, sort, page = 1, pageSize = 5, user}: IGetModelProfile<IProfileRebukesFilterData>) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IGeneralPaginationResponse<IRebuke>>(`/rebukes/${user}`, {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getQualifications({filters, sort, page = 1, pageSize = 5, user}:
								IGetModelProfile<IProfileQualificationsFilterData>) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IProfileQualificationsResponse>(`/qualifications/${user}`, {
			params: {...filters, ...sortRules, page, pageSize}
		})
	},

	async getInternships({filters, sort, page, pageSize, user}: IGetModelProfile<IProfileInternshipsFilterData>) {
		let sortRules = objToParams(sort, 'sort');

		return await client.get<IProfileInternshipsResponse>(`/internships/${user}`, {
			params: {...filters, ...sortRules, page, pageSize}
		})
	}
};

export default profileApi;
