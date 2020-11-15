import {
	ALL_USERS_CHANGE_SORT,
	ALL_USERS_ERROR,
	ALL_USERS_START,
	ALL_USERS_SUCCESS,
	ALL_USERS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {IUserTable} from '../../../interfaces/models/IUserTable';


type IResponse = IGeneralPaginationResponse<IUserTable>;

export const allUsersStart = () => <const>({
	type: ALL_USERS_START
});

export const allUsersError = (error: string) => <const>({
	type: ALL_USERS_ERROR,
	error
});

export const allUsersSuccess = (ranksResponse: IResponse) => <const>({
	type: ALL_USERS_SUCCESS,
	payload: ranksResponse
});

export const allUsersChangeSort = (field: string) => <const>({
	type: ALL_USERS_CHANGE_SORT,
	payload: field
});

export const allUsersDelete = (id: number) => <const>({
	type: ALL_USERS_DELETE,
	payload: id
});
