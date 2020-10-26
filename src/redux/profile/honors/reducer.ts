import {
	PROFILE_HONORS_CHANGE_SORT,
	PROFILE_HONORS_SUCCESS,
	PROFILE_HONORS_ERROR,
	PROFILE_HONORS_START
} from './types';

import {InferActionTypes} from '../../';
import {IHonor} from '../../../interfaces/models/IHonor';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IProfileHonorsActions = InferActionTypes<typeof actionsCreators>;

type IProfileHonorsState = {
	isLoading: boolean,
	error: string,
	honors: IHonor[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IProfileHonorsState = {
	isLoading: false,
	error: null,
	honors: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const profileHonorsReducer = (state = initialState,
								 action: IProfileHonorsActions
								): IProfileHonorsState => {
	switch(action.type){
		case PROFILE_HONORS_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_HONORS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_HONORS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				honors: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case PROFILE_HONORS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};
	}

	return state;
};

export default profileHonorsReducer;
