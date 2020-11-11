import {
	DELETE_QUALIFICATION_SUCCESS,
	DELETE_QUALIFICATION_ERROR,
	DELETE_QUALIFICATION_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteQualificationActions = InferActionTypes<typeof actionsCreators>;

type IDeleteQualificationState = number[];

const initialState: IDeleteQualificationState = [];

const deleteQualificationReducer = (state = initialState, action: IDeleteQualificationActions):
	IDeleteQualificationState => {

	switch(action.type){
		case DELETE_QUALIFICATION_START:
			return [...state, action.payload];

		case DELETE_QUALIFICATION_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_QUALIFICATION_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteQualificationReducer;
