import {
	EDIT_CATEGORY_LOAD_ERROR,
	EDIT_CATEGORY_LOAD_SUCCESS,
	EDIT_CATEGORY_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {ICategory} from '../../../interfaces/models/ICategory';

import * as actionsCreators from './actions';


export type IEditCategoryActions = InferActionTypes<typeof actionsCreators>;

type IEditCategoryState = {
	isLoading: boolean,
	error: string,
	category: ICategory
};

const initialState: IEditCategoryState = {
	isLoading: false,
	error: null,
	category: null
};

const editCategoryReducer = (state = initialState, action: IEditCategoryActions): IEditCategoryState => {
	switch(action.type){
		case EDIT_CATEGORY_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_CATEGORY_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_CATEGORY_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, category: action.payload};
	}

	return state;
};

export default editCategoryReducer;
