import {APP_INITIALIZE_SUCCESS, APP_INITIALIZE_START} from './types';
import * as actionTypes from './actions';
import {InferActionTypes} from '../';


export type IAppActionTypes = InferActionTypes<typeof actionTypes>;

type IAppState = {
	initialized: boolean,
	isLoading: boolean
};

const initialState: IAppState = {
	initialized: false,
	isLoading: false
};

const appReducer = (state = initialState, action: IAppActionTypes): IAppState => {
	switch(action.type){
		case APP_INITIALIZE_START:
			return {initialized: false, isLoading: true};

		case APP_INITIALIZE_SUCCESS:
			return {initialized: true, isLoading: false};
	}

	return state;
};

export default appReducer;
