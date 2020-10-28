import {
	DELETE_COMMISSION_ERROR,
	DELETE_COMMISSION_START,
	DELETE_COMMISSION_SUCCESS
} from './types';


export const deleteCommissionStart = (id: number) => <const>({
	type: DELETE_COMMISSION_START,
	payload: id
});

export const deleteCommissionError = (id: number, error: string) => <const>({
	type: DELETE_COMMISSION_ERROR,
	error,
	payload: id
});

export const deleteCommissionSuccess = (id: number) => <const>({
	type: DELETE_COMMISSION_SUCCESS,
	payload: id
});
