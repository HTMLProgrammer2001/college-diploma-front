import {
	EDIT_REBUKE_LOAD_ERROR,
	EDIT_REBUKE_LOAD_START,
	EDIT_REBUKE_LOAD_SUCCESS
} from './types';

import {IRebuke} from '../../../interfaces/models/IRebuke';


export const editRebukeLoadStart = () => <const>({
	type: EDIT_REBUKE_LOAD_START
});

export const editRebukeLoadError = (error: string) => <const>({
	type: EDIT_REBUKE_LOAD_ERROR,
	error
});

export const editRebukeLoadSuccess = (publication: IRebuke) => <const>({
	type: EDIT_REBUKE_LOAD_SUCCESS,
	payload: publication
});
