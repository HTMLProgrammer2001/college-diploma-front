import {
	EDIT_INTERNSHIP_LOAD_ERROR,
	EDIT_INTERNSHIP_LOAD_SUCCESS,
	EDIT_INTERNSHIP_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IInternship} from '../../../interfaces/models/IInternship';

import * as actionsCreators from './actions';


export type IEditInternshipActions = InferActionTypes<typeof actionsCreators>;

type IEditInternshipState = {
	isLoading: boolean,
	error: string,
	internship: IInternship
};

const initialState: IEditInternshipState = {
	isLoading: false,
	error: null,
	internship: null
};

const editInternshipReducer = (state = initialState, action: IEditInternshipActions): IEditInternshipState => {
	switch(action.type){
		case EDIT_INTERNSHIP_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_INTERNSHIP_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_INTERNSHIP_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, internship: action.payload};
	}

	return state;
};

export default editInternshipReducer;
