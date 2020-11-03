import {
	PUBLICATION_SINGLE_SUCCESS,
	PUBLICATION_SINGLE_START,
	PUBLICATION_SINGLE_ERROR
} from './types';

import {InferActionTypes} from '../../';
import {IPublication} from '../../../interfaces/models/IPublication';

import * as actionsCreators from './actions';


export type ISinglePublicationsActions = InferActionTypes<typeof actionsCreators>;

type ISinglePublicationsState = {
	isLoading: boolean,
	error: string,
	publication: IPublication
};

const initialState: ISinglePublicationsState = {
	isLoading: false,
	error: null,
	publication: null
};

const singlePublicationReducer = (state = initialState, action: ISinglePublicationsActions):
	ISinglePublicationsState => {
	switch(action.type){
		case PUBLICATION_SINGLE_START:
			return {...state, isLoading: true, error: null};

		case PUBLICATION_SINGLE_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PUBLICATION_SINGLE_SUCCESS:
			return {...state, isLoading: false, error: null, publication: action.payload};
	}

	return state;
};

export default singlePublicationReducer;

