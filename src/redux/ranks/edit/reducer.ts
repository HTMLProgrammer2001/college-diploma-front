import {
	EDIT_RANK_LOAD_ERROR,
	EDIT_RANK_LOAD_SUCCESS,
	EDIT_RANK_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IRank} from '../../../interfaces/models/IRank';

import * as actionsCreators from './actions';


export type IEditRankActions = InferActionTypes<typeof actionsCreators>;

type IEditRankState = {
	isLoading: boolean,
	error: string,
	rank: IRank
};

const initialState: IEditRankState = {
	isLoading: false,
	error: null,
	rank: null
};

const editRankReducer = (state = initialState, action: IEditRankActions): IEditRankState => {
	switch(action.type){
		case EDIT_RANK_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_RANK_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_RANK_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, rank: action.payload};
	}

	return state;
};

export default editRankReducer;
