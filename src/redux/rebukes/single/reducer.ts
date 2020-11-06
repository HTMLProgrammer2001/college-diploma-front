import {
	REBUKE_SINGLE_SUCCESS,
	REBUKE_SINGLE_START,
	REBUKE_SINGLE_ERROR
} from './types';

import {InferActionTypes} from '../../';
import {IRebuke} from '../../../interfaces/models/IRebuke';

import * as actionsCreators from './actions';


export type ISingleRebukesActions = InferActionTypes<typeof actionsCreators>;

type ISingleRebukesState = {
	isLoading: boolean,
	error: string,
	rebuke: IRebuke
};

const initialState: ISingleRebukesState = {
	isLoading: false,
	error: null,
	rebuke: null
};

const singleRebukeReducer = (state = initialState, action: ISingleRebukesActions):
	ISingleRebukesState => {
	switch(action.type){
		case REBUKE_SINGLE_START:
			return {...state, isLoading: true, error: null};

		case REBUKE_SINGLE_ERROR:
			return {...state, isLoading: false, error: action.error};

		case REBUKE_SINGLE_SUCCESS:
			return {...state, isLoading: false, error: null, rebuke: action.payload};
	}

	return state;
};

export default singleRebukeReducer;
