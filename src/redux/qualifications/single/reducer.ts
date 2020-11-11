import {
	QUALIFICATION_SINGLE_SUCCESS,
	QUALIFICATION_SINGLE_START,
	QUALIFICATION_SINGLE_ERROR
} from './types';

import {InferActionTypes} from '../../';
import {IQualification} from '../../../interfaces/models/IQualification';

import * as actionsCreators from './actions';


export type ISingleQualificationsActions = InferActionTypes<typeof actionsCreators>;

type ISingleQualificationsState = {
	isLoading: boolean,
	error: string,
	qualification: IQualification
};

const initialState: ISingleQualificationsState = {
	isLoading: false,
	error: null,
	qualification: null
};

const singleQualificationReducer = (state = initialState, action: ISingleQualificationsActions):
	ISingleQualificationsState => {
	switch(action.type){
		case QUALIFICATION_SINGLE_START:
			return {...state, isLoading: true, error: null};

		case QUALIFICATION_SINGLE_ERROR:
			return {...state, isLoading: false, error: action.error};

		case QUALIFICATION_SINGLE_SUCCESS:
			return {...state, isLoading: false, error: null, qualification: action.payload};
	}

	return state;
};

export default singleQualificationReducer;

