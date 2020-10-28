import {
	ALL_DEPARTMENTS_CHANGE_SORT,
	ALL_DEPARTMENTS_SUCCESS,
	ALL_DEPARTMENTS_ERROR,
	ALL_DEPARTMENTS_START
} from './types';

import {InferActionTypes} from '../../';
import {IDepartment} from '../../../interfaces/models/IDepartment';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IAllDepartmentsActions = InferActionTypes<typeof actionsCreators>;

type IAllDepartmentsState = {
	isLoading: boolean,
	error: string,
	departments: IDepartment[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllDepartmentsState = {
	isLoading: false,
	error: null,
	departments: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allDepartmentsReducer = (state = initialState, action: IAllDepartmentsActions): IAllDepartmentsState => {
	switch(action.type){
		case ALL_DEPARTMENTS_START:
			return {...state, isLoading: true, error: null};

		case ALL_DEPARTMENTS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_DEPARTMENTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				departments: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_DEPARTMENTS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};
	}

	return state;
};

export default allDepartmentsReducer;
