import {
	HONOR_SINGLE_SUCCESS,
	HONOR_SINGLE_START,
	HONOR_SINGLE_ERROR
} from './types';

import {InferActionTypes} from '../../';
import {IHonor} from '../../../interfaces/models/IHonor';

import * as actionsCreators from './actions';


export type ISingleHonorsActions = InferActionTypes<typeof actionsCreators>;

type ISingleHonorsState = {
	isLoading: boolean,
	error: string,
	honor: IHonor
};

const initialState: ISingleHonorsState = {
	isLoading: false,
	error: null,
	honor: null
};

const singleHonorReducer = (state = initialState, action: ISingleHonorsActions):
	ISingleHonorsState => {
	switch(action.type){
		case HONOR_SINGLE_START:
			return {...state, isLoading: true, error: null};

		case HONOR_SINGLE_ERROR:
			return {...state, isLoading: false, error: action.error};

		case HONOR_SINGLE_SUCCESS:
			return {...state, isLoading: false, error: null, honor: action.payload};
	}

	return state;
};

export default singleHonorReducer;

