import {
	ALL_QUALIFICATIONS_CHANGE_SORT,
	ALL_QUALIFICATIONS_SUCCESS,
	ALL_QUALIFICATIONS_ERROR,
	ALL_QUALIFICATIONS_START,
	ALL_QUALIFICATIONS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {IQualification} from '../../../interfaces/models/IQualification';


export type IAllQualificationsActions = InferActionTypes<typeof actionsCreators>;

type IAllQualificationsState = {
	isLoading: boolean,
	error: string,
	qualifications: IQualification[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllQualificationsState = {
	isLoading: false,
	error: null,
	qualifications: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allQualificationsReducer = (state = initialState, action: IAllQualificationsActions): IAllQualificationsState => {
	switch(action.type){
		case ALL_QUALIFICATIONS_START:
			return {...state, isLoading: true, error: null};

		case ALL_QUALIFICATIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_QUALIFICATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				qualifications: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_QUALIFICATIONS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_QUALIFICATIONS_DELETE:
			return {...state, qualifications: state.qualifications.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allQualificationsReducer;
