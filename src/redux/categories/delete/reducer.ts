import {
	DELETE_CATEGORY_SUCCESS,
	DELETE_CATEGORY_ERROR,
	DELETE_CATEGORY_START
} from './types';

import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';


export type IDeleteCategoryActions = InferActionTypes<typeof actionsCreators>;

type IDeleteCategoryState = number[];

const initialState: IDeleteCategoryState = [];

const deleteCategoryReducer = (state = initialState, action: IDeleteCategoryActions):
	IDeleteCategoryState => {

	switch(action.type){
		case DELETE_CATEGORY_START:
			return [...state, action.payload];

		case DELETE_CATEGORY_ERROR:
			return state.filter((id) => id != action.payload);

		case DELETE_CATEGORY_SUCCESS:
			return state.filter((id) => id != action.payload);
	}

	return state;
};

export default deleteCategoryReducer;
