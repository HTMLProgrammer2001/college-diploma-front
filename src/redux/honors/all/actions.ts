import {
	ALL_HONORS_CHANGE_SORT,
	ALL_HONORS_ERROR,
	ALL_HONORS_START,
	ALL_HONORS_SUCCESS,
	ALL_HONORS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IHonor} from '../../../interfaces/models/IHonor';


type IResponse = IGeneralPaginationResponse<IHonor>;

export const allHonorsStart = () => <const>({
	type: ALL_HONORS_START
});

export const allHonorsError = (error: string) => <const>({
	type: ALL_HONORS_ERROR,
	error
});

export const allHonorsSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_HONORS_SUCCESS,
	payload: ranksResponse
});

export const allHonorsChangeSort = (field: string) => <const>({
	type: ALL_HONORS_CHANGE_SORT,
	payload: field
});

export const allHonorsDelete = (id: number) => <const>({
	type: ALL_HONORS_DELETE,
	payload: id
});
