import {
	PROFILE_REBUKES_CHANGE_SORT,
	PROFILE_REBUKES_SUCCESS,
	PROFILE_REBUKES_ERROR,
	PROFILE_REBUKES_START
} from './types';

import {InferActionTypes} from '../../';
import {IRebuke} from '../../../interfaces/models/IRebuke';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';


export type IProfileRebukesActions = InferActionTypes<typeof actionsCreators>;

type IProfileRebukesState = {
	isLoading: boolean,
	error: string,
	rebukes: IRebuke[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IProfileRebukesState = {
	isLoading: false,
	error: null,
	rebukes: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const profileRebukesReducer = (state = initialState,
								 action: IProfileRebukesActions
								): IProfileRebukesState => {
	switch(action.type){
		case PROFILE_REBUKES_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_REBUKES_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_REBUKES_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				rebukes: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case PROFILE_REBUKES_CHANGE_SORT:
			return {...state, sort: changeSortHandler(state.sort, action.payload)}
	}

	return state;
};

export default profileRebukesReducer;
