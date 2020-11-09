import {
	DELETE_INTERNSHIP_SUCCESS,
	DELETE_INTERNSHIP_ERROR,
	DELETE_INTERNSHIP_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteInternshipActions = InferActionTypes<typeof actionsCreators>;

type IDeleteInternshipState = number[];

const initialState: IDeleteInternshipState = [];

const deleteInternshipReducer = (state = initialState, action: IDeleteInternshipActions):
	IDeleteInternshipState => {

	switch(action.type){
		case DELETE_INTERNSHIP_START:
			return [...state, action.payload];

		case DELETE_INTERNSHIP_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_INTERNSHIP_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteInternshipReducer;
