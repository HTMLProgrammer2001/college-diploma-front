import {
	DELETE_PUBLICATION_SUCCESS,
	DELETE_PUBLICATION_ERROR,
	DELETE_PUBLICATION_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeletePublicationActions = InferActionTypes<typeof actionsCreators>;

type IDeletePublicationState = number[];

const initialState: IDeletePublicationState = [];

const deletePublicationReducer = (state = initialState, action: IDeletePublicationActions):
	IDeletePublicationState => {

	switch(action.type){
		case DELETE_PUBLICATION_START:
			return [...state, action.payload];

		case DELETE_PUBLICATION_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_PUBLICATION_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deletePublicationReducer;
