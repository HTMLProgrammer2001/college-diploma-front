import {
	ALL_PUBLICATIONS_CHANGE_SORT,
	ALL_PUBLICATIONS_ERROR,
	ALL_PUBLICATIONS_START,
	ALL_PUBLICATIONS_SUCCESS,
	ALL_PUBLICATIONS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IPublication} from '../../../interfaces/models/IPublication';


type IResponse = IGeneralPaginationResponse<IPublication>;

export const allPublicationsStart = () => <const>({
	type: ALL_PUBLICATIONS_START
});

export const allPublicationsError = (error: string) => <const>({
	type: ALL_PUBLICATIONS_ERROR,
	error
});

export const allPublicationsSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_PUBLICATIONS_SUCCESS,
	payload: ranksResponse
});

export const allPublicationsChangeSort = (field: string) => <const>({
	type: ALL_PUBLICATIONS_CHANGE_SORT,
	payload: field
});

export const allPublicationsDelete = (id: number) => <const>({
	type: ALL_PUBLICATIONS_DELETE,
	payload: id
});
