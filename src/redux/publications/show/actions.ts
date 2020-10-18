import {
	PUBLICATIONS_SHOW_ERROR,
	PUBLICATIONS_SHOW_START,
	PUBLICATIONS_SHOW_SUCCESS,
	PUBLICATIONS_SHOW_CHANGE_SORT
} from './types';
import {IPublication} from '../../../interfaces/IPublication';


export const publicationsShowStart = () => <const>({
	type: PUBLICATIONS_SHOW_START
});

export const publicationsShowError = (error: string) => <const>({
	type: PUBLICATIONS_SHOW_ERROR,
	error
});

export const publicationsShowSuccess = (publications: IPublication[]) => <const>({
	type: PUBLICATIONS_SHOW_SUCCESS,
	payload: publications
});

export const publicationsShowChangeSort = (field: string) => <const>({
	type: PUBLICATIONS_SHOW_CHANGE_SORT,
	payload: field
});
