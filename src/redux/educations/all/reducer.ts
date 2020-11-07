import {
	ALL_EDUCATIONS_CHANGE_SORT,
	ALL_EDUCATIONS_SUCCESS,
	ALL_EDUCATIONS_ERROR,
	ALL_EDUCATIONS_START,
	ALL_EDUCATIONS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {IEducation} from '../../../interfaces/models/IEducation';


export type IAllEducationsActions = InferActionTypes<typeof actionsCreators>;

type IAllEducationsState = {
	isLoading: boolean,
	error: string,
	educations: IEducation[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllEducationsState = {
	isLoading: false,
	error: null,
	educations: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allEducationsReducer = (state = initialState, action: IAllEducationsActions): IAllEducationsState => {
	switch(action.type){
		case ALL_EDUCATIONS_START:
			return {...state, isLoading: true, error: null};

		case ALL_EDUCATIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_EDUCATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				educations: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_EDUCATIONS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_EDUCATIONS_DELETE:
			return {...state, educations: state.educations.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allEducationsReducer;
