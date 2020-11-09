import {
	ALL_INTERNSHIPS_CHANGE_SORT,
	ALL_INTERNSHIPS_SUCCESS,
	ALL_INTERNSHIPS_ERROR,
	ALL_INTERNSHIPS_START,
	ALL_INTERNSHIPS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {IInternship} from '../../../interfaces/models/IInternship';


export type IAllInternshipsActions = InferActionTypes<typeof actionsCreators>;

type IAllInternshipsState = {
	isLoading: boolean,
	error: string,
	internships: IInternship[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllInternshipsState = {
	isLoading: false,
	error: null,
	internships: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allInternshipsReducer = (state = initialState, action: IAllInternshipsActions): IAllInternshipsState => {
	switch(action.type){
		case ALL_INTERNSHIPS_START:
			return {...state, isLoading: true, error: null};

		case ALL_INTERNSHIPS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_INTERNSHIPS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				internships: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_INTERNSHIPS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_INTERNSHIPS_DELETE:
			return {...state, internships: state.internships.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allInternshipsReducer;
