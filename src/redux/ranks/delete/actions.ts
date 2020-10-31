import {
	DELETE_RANK_ERROR,
	DELETE_RANK_START,
	DELETE_RANK_SUCCESS
} from './types';


export const deleteRankStart = (id: number) => <const>({
	type: DELETE_RANK_START,
	payload: id
});

export const deleteRankError = (id: number, error: string) => <const>({
	type: DELETE_RANK_ERROR,
	error,
	payload: id
});

export const deleteRankSuccess = (id: number) => <const>({
	type: DELETE_RANK_SUCCESS,
	payload: id
});
