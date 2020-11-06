import {
	DELETE_REBUKE_SUCCESS,
	DELETE_REBUKE_ERROR,
	DELETE_REBUKE_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteRebukeActions = InferActionTypes<typeof actionsCreators>;

type IDeleteRebukeState = number[];

const initialState: IDeleteRebukeState = [];

const deleteRebukeReducer = (state = initialState, action: IDeleteRebukeActions):
	IDeleteRebukeState => {

	switch(action.type){
		case DELETE_REBUKE_START:
			return [...state, action.payload];

		case DELETE_REBUKE_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_REBUKE_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteRebukeReducer;
