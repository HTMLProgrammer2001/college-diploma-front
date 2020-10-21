import {
	PROFILE_REBUKES_CHANGE_SORT,
	PROFILE_REBUKES_ERROR,
	PROFILE_REBUKES_START,
	PROFILE_REBUKES_SUCCESS
} from './types';
import {IRebuke} from '../../../interfaces/models/IRebuke';


export const profileRebukesStart = () => <const>({
	type: PROFILE_REBUKES_START
});

export const profileRebukesError = (error: string) => <const>({
	type: PROFILE_REBUKES_ERROR,
	error
});

export const profileRebukesSuccess = (rebukes: IRebuke[]) => <const>({
	type: PROFILE_REBUKES_SUCCESS,
	payload: rebukes
});

export const profileRebukesChangeSort = (field: string) => <const>({
	type: PROFILE_REBUKES_CHANGE_SORT,
	payload: field
});
