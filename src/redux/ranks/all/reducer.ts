import {
	ALL_RANKS_CHANGE_SORT,
	ALL_RANKS_SUCCESS,
	ALL_RANKS_ERROR,
	ALL_RANKS_START,
	ALL_RANKS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';
import {IRank} from '../../../interfaces/models/IRank';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IAllRanksActions = InferActionTypes<typeof actionsCreators>;

type IAllRanksState = {
	isLoading: boolean,
	error: string,
	ranks: IRank[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllRanksState = {
	isLoading: false,
	error: null,
	ranks: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allRanksReducer = (state = initialState, action: IAllRanksActions): IAllRanksState => {
	switch(action.type){
		case ALL_RANKS_START:
			return {...state, isLoading: true, error: null};

		case ALL_RANKS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_RANKS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				ranks: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_RANKS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_RANKS_DELETE:
			return {...state, ranks: state.ranks.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allRanksReducer;
