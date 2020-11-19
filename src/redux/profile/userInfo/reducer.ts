import {
	PROFILE_USER_SUCCESS,
	PROFILE_USER_ERROR,
	PROFILE_USER_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';
import {IUser} from '../../../interfaces/models/IUser';


export type IProfileUserActions = InferActionTypes<typeof actionsCreators>;

type IProfileUsersState = {
	isLoading: boolean,
	error: string,
	user: IUser,
};

const initialState: IProfileUsersState = {
	isLoading: false,
	error: null,
	user: null
};

const profileUsersReducer = (state = initialState, action: IProfileUserActions): IProfileUsersState => {
	switch(action.type){
		case PROFILE_USER_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_USER_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_USER_SUCCESS:
			return {...state, isLoading: false, error: null, user: action.payload};
	}

	return state;
};

export default profileUsersReducer;
