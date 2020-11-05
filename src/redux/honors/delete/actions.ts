import {
	DELETE_HONOR_ERROR,
	DELETE_HONOR_START,
	DELETE_HONOR_SUCCESS
} from './types';


export const deleteHonorStart = (id: number) => <const>({
	type: DELETE_HONOR_START,
	payload: id
});

export const deleteHonorError = (id: number, error: string) => <const>({
	type: DELETE_HONOR_ERROR,
	error,
	payload: id
});

export const deleteHonorSuccess = (id: number) => <const>({
	type: DELETE_HONOR_SUCCESS,
	payload: id
});
