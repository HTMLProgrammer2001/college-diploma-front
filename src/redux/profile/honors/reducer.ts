import {
	PROFILE_HONORS_CHANGE_SORT,
	PROFILE_HONORS_SUCCESS,
	PROFILE_HONORS_ERROR,
	PROFILE_HONORS_START
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IHonor} from '../../../interfaces/IHonor';


export type IProfileHonorsActions = InferActionTypes<typeof actionsCreators>;

type IProfileHonorsState = {
	isLoading: boolean,
	error: string,
	honors: IHonor[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IProfileHonorsState = {
	isLoading: false,
	error: null,
	honors: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: {}
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
				honors: action.payload
			};

		case PROFILE_HONORS_CHANGE_SORT:
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

export default profileHonorsReducer;
