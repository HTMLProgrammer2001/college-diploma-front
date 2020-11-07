import {
	EDUCATION_SINGLE_SUCCESS,
	EDUCATION_SINGLE_START,
	EDUCATION_SINGLE_ERROR
} from './types';

import {InferActionTypes} from '../../';
import {IEducation} from '../../../interfaces/models/IEducation';

import * as actionsCreators from './actions';


export type ISingleEducationsActions = InferActionTypes<typeof actionsCreators>;

type ISingleEducationsState = {
	isLoading: boolean,
	error: string,
	education: IEducation
};

const initialState: ISingleEducationsState = {
	isLoading: false,
	error: null,
	education: null
};

const singleEducationReducer = (state = initialState, action: ISingleEducationsActions):
	ISingleEducationsState => {
	switch(action.type){
		case EDUCATION_SINGLE_START:
			return {...state, isLoading: true, error: null};

		case EDUCATION_SINGLE_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDUCATION_SINGLE_SUCCESS:
			return {...state, isLoading: false, error: null, education: action.payload};
	}

	return state;
};

export default singleEducationReducer;
