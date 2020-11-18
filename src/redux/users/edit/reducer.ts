import {
	EDIT_USER_LOAD_ERROR,
	EDIT_USER_LOAD_SUCCESS,
	EDIT_USER_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IUser} from '../../../interfaces/models/IUser';

import * as actionsCreators from './actions';


export type IEditUserActions = InferActionTypes<typeof actionsCreators>;

type IEditUserState = {
	isLoading: boolean,
	error: string,
	user: IUser
};

const initialState: IEditUserState = {
	isLoading: false,
	error: null,
	user: null
};

const editUserReducer = (state = initialState, action: IEditUserActions): IEditUserState => {
	switch(action.type){
		case EDIT_USER_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_USER_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_USER_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, user: action.payload};
	}

	return state;
};

export default editUserReducer;
