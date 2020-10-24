import {
	PROFILE_PUBLICATIONS_CHANGE_SORT,
	PROFILE_PUBLICATIONS_ERROR,
	PROFILE_PUBLICATIONS_START,
	PROFILE_PUBLICATIONS_SUCCESS
} from './types';
import {IPublication} from '../../../interfaces/models/IPublication';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';


type IResponse = IGeneralPaginationResponse<IPublication>;

export const profilePublicationsStart = () => <const>({
	type: PROFILE_PUBLICATIONS_START
});

export const profilePublicationsError = (error: string) => <const>({
	type: PROFILE_PUBLICATIONS_ERROR,
	error
});

export const profilePublicationsSuccess = (publicationResponse: IResponse) => <const>({
	type: PROFILE_PUBLICATIONS_SUCCESS,
	payload: publicationResponse
});

export const profilePublicationsChangeSort = (field: string) => <const>({
	type: PROFILE_PUBLICATIONS_CHANGE_SORT,
	payload: field
});
