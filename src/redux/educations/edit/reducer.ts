import {
	EDIT_EDUCATION_LOAD_ERROR,
	EDIT_EDUCATION_LOAD_SUCCESS,
	EDIT_EDUCATION_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IEducation} from '../../../interfaces/models/IEducation';

import * as actionsCreators from './actions';


export type IEditEducationActions = InferActionTypes<typeof actionsCreators>;

type IEditEducationState = {
	isLoading: boolean,
	error: string,
	education: IEducation
};

const initialState: IEditEducationState = {
	isLoading: false,
	error: null,
	education: null
};

const editEducationReducer = (state = initialState, action: IEditEducationActions): IEditEducationState => {
	switch(action.type){
		case EDIT_EDUCATION_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_EDUCATION_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_EDUCATION_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, education: action.payload};
	}

	return state;
};

export default editEducationReducer;

