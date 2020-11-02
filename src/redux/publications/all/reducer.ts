import {
	ALL_PUBLICATIONS_CHANGE_SORT,
	ALL_PUBLICATIONS_SUCCESS,
	ALL_PUBLICATIONS_ERROR,
	ALL_PUBLICATIONS_START,
	ALL_PUBLICATIONS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';
import {IPublication} from '../../../interfaces/models/IPublication';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IAllPublicationsActions = InferActionTypes<typeof actionsCreators>;

type IAllPublicationsState = {
	isLoading: boolean,
	error: string,
	publications: IPublication[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllPublicationsState = {
	isLoading: false,
	error: null,
	publications: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allPublicationsReducer = (state = initialState, action: IAllPublicationsActions): IAllPublicationsState => {
	switch(action.type){
		case ALL_PUBLICATIONS_START:
			return {...state, isLoading: true, error: null};

		case ALL_PUBLICATIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_PUBLICATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				publications: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_PUBLICATIONS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_PUBLICATIONS_DELETE:
			return {...state, publications: state.publications.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allPublicationsReducer;
