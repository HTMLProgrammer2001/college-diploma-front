import {
	EDIT_COMMISSION_LOAD_ERROR,
	EDIT_COMMISSION_LOAD_SUCCESS,
	EDIT_COMMISSION_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {ICommission} from '../../../interfaces/models/ICommission';

import * as actionsCreators from './actions';


export type IEditCommissionActions = InferActionTypes<typeof actionsCreators>;

type IEditCommissionState = {
	isLoading: boolean,
	error: string,
	commission: ICommission
};

const initialState: IEditCommissionState = {
	isLoading: false,
	error: null,
	commission: null
};

const editCommissionReducer = (state = initialState, action: IEditCommissionActions): IEditCommissionState => {
	switch(action.type){
		case EDIT_COMMISSION_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_COMMISSION_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_COMMISSION_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, commission: action.payload};
	}

	return state;
};

export default editCommissionReducer;
