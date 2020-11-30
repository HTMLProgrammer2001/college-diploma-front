import {APP_INITIALIZE_SUCCESS, APP_INITIALIZE_START, APP_SET_ERROR, APP_RESET_ERROR} from './types';
import * as actionTypes from './actions';
import {InferActionTypes} from '../';


export type IAppActionTypes = InferActionTypes<typeof actionTypes>;

type IAppState = {
	initialized: boolean,
	isLoading: boolean,
	error?: {code: number, msg: string}
};

const initialState: IAppState = {
	initialized: false,
	isLoading: false,
	error: null
};

const appReducer = (state = initialState, action: IAppActionTypes): IAppState => {
	switch(action.type){
		case APP_INITIALIZE_START:
			return {...state, initialized: false, isLoading: true};

		case APP_INITIALIZE_SUCCESS:
			return {...state, initialized: true, isLoading: false};

		case APP_SET_ERROR:
			return {...state, error: action.payload};

		case APP_RESET_ERROR:
			return {...state, error: null};
	}

	return state;
};

export default appReducer;
