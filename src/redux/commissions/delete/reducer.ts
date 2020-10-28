import {
	DELETE_COMMISSION_SUCCESS,
	DELETE_COMMISSION_ERROR,
	DELETE_COMMISSION_START
} from './types';

import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';


export type IDeleteCommissionActions = InferActionTypes<typeof actionsCreators>;

type IDeleteCommissionState = number[];

const initialState: IDeleteCommissionState = [];

const deleteCommissionReducer = (state = initialState, action: IDeleteCommissionActions):
	IDeleteCommissionState => {

	switch(action.type){
		case DELETE_COMMISSION_START:
			return [...state, action.payload];

		case DELETE_COMMISSION_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_COMMISSION_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteCommissionReducer;
