import {
	EDIT_RANK_LOAD_ERROR,
	EDIT_RANK_LOAD_START,
	EDIT_RANK_LOAD_SUCCESS
} from './types';

import {IRank} from '../../../interfaces/models/IRank';


export const editRankLoadStart = () => <const>({
	type: EDIT_RANK_LOAD_START
});

export const editRankLoadError = (error: string) => <const>({
	type: EDIT_RANK_LOAD_ERROR,
	error
});

export const editRankLoadSuccess = (rank: IRank) => <const>({
	type: EDIT_RANK_LOAD_SUCCESS,
	payload: rank
});
