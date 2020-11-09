import {
	INTERNSHIP_SINGLE_SUCCESS,
	INTERNSHIP_SINGLE_START,
	INTERNSHIP_SINGLE_ERROR
} from './types';

import {InferActionTypes} from '../../';
import {IInternship} from '../../../interfaces/models/IInternship';

import * as actionsCreators from './actions';


export type ISingleInternshipsActions = InferActionTypes<typeof actionsCreators>;

type ISingleInternshipsState = {
	isLoading: boolean,
	error: string,
	internship: IInternship
};

const initialState: ISingleInternshipsState = {
	isLoading: false,
	error: null,
	internship: null
};

const singleInternshipReducer = (state = initialState, action: ISingleInternshipsActions):
	ISingleInternshipsState => {
	switch(action.type){
		case INTERNSHIP_SINGLE_START:
			return {...state, isLoading: true, error: null};

		case INTERNSHIP_SINGLE_ERROR:
			return {...state, isLoading: false, error: action.error};

		case INTERNSHIP_SINGLE_SUCCESS:
			return {...state, isLoading: false, error: null, internship: action.payload};
	}

	return state;
};

export default singleInternshipReducer;

