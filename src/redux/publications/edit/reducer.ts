import {
	EDIT_PUBLICATION_LOAD_ERROR,
	EDIT_PUBLICATION_LOAD_SUCCESS,
	EDIT_PUBLICATION_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IPublication} from '../../../interfaces/models/IPublication';

import * as actionsCreators from './actions';


export type IEditPublicationActions = InferActionTypes<typeof actionsCreators>;

type IEditPublicationState = {
	isLoading: boolean,
	error: string,
	publication: IPublication
};

const initialState: IEditPublicationState = {
	isLoading: false,
	error: null,
	publication: null
};

const editPublicationReducer = (state = initialState, action: IEditPublicationActions): IEditPublicationState => {
	switch(action.type){
		case EDIT_PUBLICATION_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_PUBLICATION_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_PUBLICATION_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, publication: action.payload};
	}

	return state;
};

export default editPublicationReducer;

