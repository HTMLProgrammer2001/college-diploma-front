import {
	PROFILE_QUALIFICATIONS_CHANGE_SORT,
	PROFILE_QUALIFICATIONS_SUCCESS,
	PROFILE_QUALIFICATIONS_ERROR,
	PROFILE_QUALIFICATIONS_START,
	PROFILE_QUALIFICATIONS_SET_NEXT
} from './types';

import {InferActionTypes} from '../../';
import {IQualification} from '../../../interfaces/models/IQualification';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {ISort} from '../../../interfaces/ISort';


export type IProfileQualificationsActions = InferActionTypes<typeof actionsCreators>;

type IProfileQualificationsState = {
	isLoading: boolean,
	error: string,
	qualifications: IQualification[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[],
	nextDate: string
};

const initialState: IProfileQualificationsState = {
	isLoading: false,
	error: null,
	qualifications: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: [],
	nextDate: null
};

const profileQualificationsReducer = (state = initialState,
								 action: IProfileQualificationsActions
								): IProfileQualificationsState => {
	switch(action.type){
		case PROFILE_QUALIFICATIONS_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_QUALIFICATIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_QUALIFICATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				qualifications: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case PROFILE_QUALIFICATIONS_CHANGE_SORT:
			return {...state, sort: changeSortHandler(state.sort, action.payload)}

		case PROFILE_QUALIFICATIONS_SET_NEXT:
			return {...state, nextDate: action.payload};
	}

	return state;
};

export default profileQualificationsReducer;
