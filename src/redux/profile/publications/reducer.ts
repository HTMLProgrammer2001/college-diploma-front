import {
	PROFILE_PUBLICATIONS_CHANGE_SORT,
	PROFILE_PUBLICATIONS_SUCCESS,
	PROFILE_PUBLICATIONS_ERROR,
	PROFILE_PUBLICATIONS_START
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IPublication} from '../../../interfaces/IPublication';


export type IProfilePublicationsActions = InferActionTypes<typeof actionsCreators>;

type IProfilePublicationsState = {
	isLoading: boolean,
	error: string,
	publications: IPublication[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IProfilePublicationsState = {
	isLoading: false,
	error: null,
	publications: [],
	currentPage: 1,
	total: 6,
	pageSize: 5,
	sort: {}
};

const profilePublicationsReducer = (state = initialState,
								 action: IProfilePublicationsActions
								): IProfilePublicationsState => {
	switch(action.type){
		case PROFILE_PUBLICATIONS_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_PUBLICATIONS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_PUBLICATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				publications: action.payload
			};

		case PROFILE_PUBLICATIONS_CHANGE_SORT:
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

export default profilePublicationsReducer;
