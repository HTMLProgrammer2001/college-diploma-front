import {
	ALL_COMMISSIONS_CHANGE_SORT,
	ALL_COMMISSIONS_SUCCESS,
	ALL_COMMISSIONS_ERROR,
	ALL_COMMISSIONS_START,
	ALL_COMMISSIONS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';
import {ICommission} from '../../../interfaces/models/ICommission';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IAllCommissionsActions = InferActionTypes<typeof actionsCreators>;

type IAllCommissionsState = {
	isLoading: boolean,
	error: string,
	commissions: ICommission[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllCommissionsState = {
	isLoading: false,
	error: null,
	commissions: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allCommissionsReducer = (state = initialState, action: IAllCommissionsActions): IAllCommissionsState => {
	switch(action.type){
		case ALL_COMMISSIONS_START:
			return {...state, isLoading: true, error: null};

		case ALL_COMMISSIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_COMMISSIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				commissions: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_COMMISSIONS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_COMMISSIONS_DELETE:
			return {...state, commissions: state.commissions.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allCommissionsReducer;
