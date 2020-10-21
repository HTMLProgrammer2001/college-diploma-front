import {
	PROFILE_REBUKES_CHANGE_SORT,
	PROFILE_REBUKES_SUCCESS,
	PROFILE_REBUKES_ERROR,
	PROFILE_REBUKES_START
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IRebuke} from '../../../interfaces/models/IRebuke';


export type IProfileRebukesActions = InferActionTypes<typeof actionsCreators>;

type IProfileRebukesState = {
	isLoading: boolean,
	error: string,
	rebukes: IRebuke[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IProfileRebukesState = {
	isLoading: false,
	error: null,
	rebukes: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: {}
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
				rebukes: action.payload
			};

		case PROFILE_REBUKES_CHANGE_SORT:
			return {
				...state,
				sort: {
					...state.sort,
					[action.payload]: !state.sort[action.payload] ? 1 :
						(state.sort[action.payload] == 1 ? -1 : undefined)
				}
			}
	}

	return state;
};

export default profileRebukesReducer;
