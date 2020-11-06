import {
	ALL_REBUKES_CHANGE_SORT,
	ALL_REBUKES_SUCCESS,
	ALL_REBUKES_ERROR,
	ALL_REBUKES_START,
	ALL_REBUKES_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {IRebuke} from '../../../interfaces/models/IRebuke';


export type IAllRebukesActions = InferActionTypes<typeof actionsCreators>;

type IAllRebukesState = {
	isLoading: boolean,
	error: string,
	rebukes: IRebuke[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllRebukesState = {
	isLoading: false,
	error: null,
	rebukes: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allRebukesReducer = (state = initialState, action: IAllRebukesActions): IAllRebukesState => {
	switch(action.type){
		case ALL_REBUKES_START:
			return {...state, isLoading: true, error: null};

		case ALL_REBUKES_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_REBUKES_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				rebukes: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_REBUKES_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_REBUKES_DELETE:
			return {...state, rebukes: state.rebukes.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allRebukesReducer;
