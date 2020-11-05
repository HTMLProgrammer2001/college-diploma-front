import {
	DELETE_HONOR_SUCCESS,
	DELETE_HONOR_ERROR,
	DELETE_HONOR_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteHonorActions = InferActionTypes<typeof actionsCreators>;

type IDeleteHonorState = number[];

const initialState: IDeleteHonorState = [];

const deleteHonorReducer = (state = initialState, action: IDeleteHonorActions):
	IDeleteHonorState => {

	switch(action.type){
		case DELETE_HONOR_START:
			return [...state, action.payload];

		case DELETE_HONOR_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_HONOR_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteHonorReducer;
