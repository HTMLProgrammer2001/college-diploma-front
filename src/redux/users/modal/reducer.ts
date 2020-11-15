import {
	USER_MODAL_ERROR, USER_MODAL_SET_NAME,
	USER_MODAL_START,
	USER_MODAL_SUCCESS
} from './types';

import {InferActionTypes} from '../../';
import {IUser} from '../../../interfaces/models/IUser';

import * as actionsCreators from './actions';


export type IModalUserActions = InferActionTypes<typeof actionsCreators>;

type IModalUserState = {
	isLoading: boolean,
	error: string,
	user: IUser,
	userName: string
};

const initialState: IModalUserState = {
	isLoading: false,
	error: null,
	user: null,
	userName: null
};

const modalUserReducer = (state = initialState, action: IModalUserActions): IModalUserState => {
	switch(action.type){
		case USER_MODAL_SET_NAME:
			return {...state, userName: action.payload};

		case USER_MODAL_START:
			return {...state, isLoading: true, error: null, user: null};

		case USER_MODAL_ERROR:
			return {...state, isLoading: false, error: action.error, user: null};

		case USER_MODAL_SUCCESS:
			return {...state, isLoading: false, error: null, user: action.payload};
	}

	return state;
};

export default modalUserReducer;
