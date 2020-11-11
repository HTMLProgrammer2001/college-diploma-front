import {
	EDIT_QUALIFICATION_LOAD_ERROR,
	EDIT_QUALIFICATION_LOAD_SUCCESS,
	EDIT_QUALIFICATION_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IQualification} from '../../../interfaces/models/IQualification';

import * as actionsCreators from './actions';


export type IEditQualificationActions = InferActionTypes<typeof actionsCreators>;

type IEditQualificationState = {
	isLoading: boolean,
	error: string,
	qualification: IQualification
};

const initialState: IEditQualificationState = {
	isLoading: false,
	error: null,
	qualification: null
};

const editQualificationReducer = (state = initialState, action: IEditQualificationActions): IEditQualificationState => {
	switch(action.type){
		case EDIT_QUALIFICATION_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_QUALIFICATION_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_QUALIFICATION_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, qualification: action.payload};
	}

	return state;
};

export default editQualificationReducer;

