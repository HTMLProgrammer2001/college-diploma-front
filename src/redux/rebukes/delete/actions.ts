import {
	DELETE_REBUKE_ERROR,
	DELETE_REBUKE_START,
	DELETE_REBUKE_SUCCESS
} from './types';


export const deleteRebukeStart = (id: number) => <const>({
	type: DELETE_REBUKE_START,
	payload: id
});

export const deleteRebukeError = (id: number, error: string) => <const>({
	type: DELETE_REBUKE_ERROR,
	error,
	payload: id
});

export const deleteRebukeSuccess = (id: number) => <const>({
	type: DELETE_REBUKE_SUCCESS,
	payload: id
});
