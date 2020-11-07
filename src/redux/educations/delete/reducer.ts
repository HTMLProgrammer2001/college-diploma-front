import {
	DELETE_EDUCATION_SUCCESS,
	DELETE_EDUCATION_ERROR,
	DELETE_EDUCATION_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteEducationActions = InferActionTypes<typeof actionsCreators>;

type IDeleteEducationState = number[];

const initialState: IDeleteEducationState = [];

const deleteEducationReducer = (state = initialState, action: IDeleteEducationActions):
	IDeleteEducationState => {

	switch(action.type){
		case DELETE_EDUCATION_START:
			return [...state, action.payload];

		case DELETE_EDUCATION_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_EDUCATION_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteEducationReducer;
