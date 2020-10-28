import {
	ALL_COMMISSIONS_CHANGE_SORT,
	ALL_COMMISSIONS_ERROR,
	ALL_COMMISSIONS_START,
	ALL_COMMISSIONS_SUCCESS,
	ALL_COMMISSIONS_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {ICommission} from '../../../interfaces/models/ICommission';


type IResponse = IGeneralPaginationResponse<ICommission>;

export const allCommissionsStart = () => <const>({
	type: ALL_COMMISSIONS_START
});

export const allCommissionsError = (error: string) => <const>({
	type: ALL_COMMISSIONS_ERROR,
	error
});

export const allCommissionsSuccess = (commissionsResponse: IResponse) => <const>({
	type: ALL_COMMISSIONS_SUCCESS,
	payload: commissionsResponse
});

export const allCommissionsChangeSort = (field: string) => <const>({
	type: ALL_COMMISSIONS_CHANGE_SORT,
	payload: field
});

export const allCommissionsDelete = (id: number) => <const>({
	type: ALL_COMMISSIONS_DELETE,
	payload: id
});
