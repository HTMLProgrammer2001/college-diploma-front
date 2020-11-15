import {
	DELETE_USER_SUCCESS,
	DELETE_USER_ERROR,
	DELETE_USER_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteUserActions = InferActionTypes<typeof actionsCreators>;

type IDeleteUserState = number[];

const initialState: IDeleteUserState = [];

const deleteUserReducer = (state = initialState, action: IDeleteUserActions):
	IDeleteUserState => {

	switch(action.type){
		case DELETE_USER_START:
			return [...state, action.payload];

		case DELETE_USER_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_USER_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteUserReducer;
