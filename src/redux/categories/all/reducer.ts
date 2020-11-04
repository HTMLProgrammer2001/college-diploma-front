import {
	ALL_CATEGORIES_CHANGE_SORT,
	ALL_CATEGORIES_SUCCESS,
	ALL_CATEGORIES_ERROR,
	ALL_CATEGORIES_START,
	ALL_CATEGORIES_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';
import {ICategory} from '../../../interfaces/models/ICategory';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IAllCategoriesActions = InferActionTypes<typeof actionsCreators>;

type IAllCategoriesState = {
	isLoading: boolean,
	error: string,
	categories: ICategory[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllCategoriesState = {
	isLoading: false,
	error: null,
	categories: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allCategoriesReducer = (state = initialState, action: IAllCategoriesActions): IAllCategoriesState => {
	switch(action.type){
		case ALL_CATEGORIES_START:
			return {...state, isLoading: true, error: null};

		case ALL_CATEGORIES_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_CATEGORIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				categories: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_CATEGORIES_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_CATEGORIES_DELETE:
			return {...state, categories: state.categories.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allCategoriesReducer;
