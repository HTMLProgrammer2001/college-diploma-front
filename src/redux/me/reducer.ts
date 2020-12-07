import {ME_LOAD_SUCCESS, ME_LOAD_ERROR, ME_LOAD_START} from './types';
import * as actionTypes from './actions';
import {InferActionTypes} from '../';
import {IUser} from '../../interfaces/models/IUser';


export type IMeActionTypes = InferActionTypes<typeof actionTypes>;

export type IMeState = {
	isLoading: boolean,
	error: string,
	user: IUser
};

const initialState: IMeState = {
	isLoading: false,
	error: null,
	user: null
};

const meReducer = (state = initialState, action: IMeActionTypes): IMeState => {
	switch(action.type){
		case ME_LOAD_START:
			return {...state, isLoading: true, error: null, user: null};

		case ME_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error, user: null};

		case ME_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, user: action.payload};
	}

	return state;
};

export default meReducer;
