import {
	EDIT_REBUKE_LOAD_ERROR,
	EDIT_REBUKE_LOAD_SUCCESS,
	EDIT_REBUKE_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IRebuke} from '../../../interfaces/models/IRebuke';

import * as actionsCreators from './actions';


export type IEditRebukeActions = InferActionTypes<typeof actionsCreators>;

type IEditRebukeState = {
	isLoading: boolean,
	error: string,
	rebuke: IRebuke
};

const initialState: IEditRebukeState = {
	isLoading: false,
	error: null,
	rebuke: null
};

const editRebukeReducer = (state = initialState, action: IEditRebukeActions): IEditRebukeState => {
	switch(action.type){
		case EDIT_REBUKE_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_REBUKE_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_REBUKE_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, rebuke: action.payload};
	}

	return state;
};

export default editRebukeReducer;

