import {
	DELETE_RANK_SUCCESS,
	DELETE_RANK_ERROR,
	DELETE_RANK_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteRankActions = InferActionTypes<typeof actionsCreators>;

type IDeleteRankState = number[];

const initialState: IDeleteRankState = [];

const deleteRankReducer = (state = initialState, action: IDeleteRankActions):
	IDeleteRankState => {

	switch(action.type){
		case DELETE_RANK_START:
			return [...state, action.payload];

		case DELETE_RANK_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_RANK_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteRankReducer;
