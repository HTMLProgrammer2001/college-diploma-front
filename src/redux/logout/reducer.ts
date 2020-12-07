import {LOGOUT_SUCCESS, LOGOUT_ERROR, LOGOUT_START} from './types';
import * as actionTypes from './actions';
import {InferActionTypes} from '../';


export type ILogoutActionTypes = InferActionTypes<typeof actionTypes>;

export type ILogoutState = {
	isLoading: boolean,
	error: string
};

const initialState: ILogoutState = {
	isLoading: false,
	error: null
};

const logoutReducer = (state = initialState, action: ILogoutActionTypes): ILogoutState => {
	switch(action.type){
		case LOGOUT_START:
			return {isLoading: true, error: null};

		case LOGOUT_ERROR:
			return {isLoading: false, error: action.error};

		case LOGOUT_SUCCESS:
			return {isLoading: false, error: null};
	}

	return state;
};

export default logoutReducer;
