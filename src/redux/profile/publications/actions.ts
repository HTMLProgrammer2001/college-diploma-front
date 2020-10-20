import {
	PROFILE_PUBLICATIONS_CHANGE_SORT,
	PROFILE_PUBLICATIONS_ERROR,
	PROFILE_PUBLICATIONS_START,
	PROFILE_PUBLICATIONS_SUCCESS
} from './types';
import {IPublication} from '../../../interfaces/IPublication';


export const profilePublicationsStart = () => <const>({
	type: PROFILE_PUBLICATIONS_START
});

export const profilePublicationsError = (error: string) => <const>({
	type: PROFILE_PUBLICATIONS_ERROR,
	error
});

export const profilePublicationsSuccess = (publications: IPublication[]) => <const>({
	type: PROFILE_PUBLICATIONS_SUCCESS,
	payload: publications
});

export const profilePublicationsChangeSort = (field: string) => <const>({
	type: PROFILE_PUBLICATIONS_CHANGE_SORT,
	payload: field
});
