import {
	ALL_HONORS_CHANGE_SORT,
	ALL_HONORS_SUCCESS,
	ALL_HONORS_ERROR,
	ALL_HONORS_START,
	ALL_HONORS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {IHonor} from '../../../interfaces/models/IHonor';


export type IAllHonorsActions = InferActionTypes<typeof actionsCreators>;

type IAllHonorsState = {
	isLoading: boolean,
	error: string,
	honors: IHonor[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllHonorsState = {
	isLoading: false,
	error: null,
	honors: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allHonorsReducer = (state = initialState, action: IAllHonorsActions): IAllHonorsState => {
	switch(action.type){
		case ALL_HONORS_START:
			return {...state, isLoading: true, error: null};

		case ALL_HONORS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_HONORS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				honors: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_HONORS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_HONORS_DELETE:
			return {...state, honors: state.honors.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allHonorsReducer;
