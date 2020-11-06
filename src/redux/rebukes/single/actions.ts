import {
	REBUKE_SINGLE_ERROR,
	REBUKE_SINGLE_START,
	REBUKE_SINGLE_SUCCESS
} from './types';
import {IRebuke} from '../../../interfaces/models/IRebuke';


export const rebukeSingleStart = () => <const>({
	type: REBUKE_SINGLE_START
});

export const rebukeSingleError = (error: string) => <const>({
	type: REBUKE_SINGLE_ERROR,
	error
});

export const rebukeSingleSuccess = (rebuke: IRebuke) => <const>({
	type: REBUKE_SINGLE_SUCCESS,
	payload: rebuke
});
