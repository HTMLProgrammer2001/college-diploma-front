import {
	EDIT_COMMISSION_LOAD_ERROR,
	EDIT_COMMISSION_LOAD_START,
	EDIT_COMMISSION_LOAD_SUCCESS
} from './types';

import {ICommission} from '../../../interfaces/models/ICommission';


export const editCommissionLoadStart = () => <const>({
	type: EDIT_COMMISSION_LOAD_START
});

export const editCommissionLoadError = (error: string) => <const>({
	type: EDIT_COMMISSION_LOAD_ERROR,
	error
});

export const editCommissionLoadSuccess = (commission: ICommission) => <const>({
	type: EDIT_COMMISSION_LOAD_SUCCESS,
	payload: commission
});
