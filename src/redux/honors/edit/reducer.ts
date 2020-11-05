import {
	EDIT_HONOR_LOAD_ERROR,
	EDIT_HONOR_LOAD_SUCCESS,
	EDIT_HONOR_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IHonor} from '../../../interfaces/models/IHonor';

import * as actionsCreators from './actions';


export type IEditHonorActions = InferActionTypes<typeof actionsCreators>;

type IEditHonorState = {
	isLoading: boolean,
	error: string,
	honor: IHonor
};

const initialState: IEditHonorState = {
	isLoading: false,
	error: null,
	honor: null
};

const editHonorReducer = (state = initialState, action: IEditHonorActions): IEditHonorState => {
	switch(action.type){
		case EDIT_HONOR_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_HONOR_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_HONOR_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, honor: action.payload};
	}

	return state;
};

export default editHonorReducer;

