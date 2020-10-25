import {
	PROFILE_EDUCATIONS_CHANGE_SORT,
	PROFILE_EDUCATIONS_SUCCESS,
	PROFILE_EDUCATIONS_ERROR,
	PROFILE_EDUCATIONS_START
} from './types';
import {InferActionTypes} from '../../';
import {IEducation} from '../../../interfaces/models/IEducation';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IProfileEducationsActions = InferActionTypes<typeof actionsCreators>;

type IProfileEducationsState = {
	isLoading: boolean,
	error: string,
	educations: IEducation[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IProfileEducationsState = {
	isLoading: false,
	error: null,
	educations: [],
	currentPage: 0,
	total: 0,
	pageSize: 4,
	sort: []
};

const profileEducationsReducer = (state = initialState,
								 action: IProfileEducationsActions
								): IProfileEducationsState => {
	switch(action.type){
		case PROFILE_EDUCATIONS_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_EDUCATIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_EDUCATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				educations: action.payload.data,
				total: action.payload.meta.total,
				currentPage: action.payload.meta.current_page,
				pageSize: action.payload.meta.per_page
			};

		case PROFILE_EDUCATIONS_CHANGE_SORT:
			return {...state, sort: changeSortHandler(state.sort, action.payload)};
	}

	return state;
};

export default profileEducationsReducer;
