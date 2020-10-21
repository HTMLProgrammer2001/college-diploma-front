import {
	PROFILE_INTERNSHIPS_CHANGE_SORT,
	PROFILE_INTERNSHIPS_SUCCESS,
	PROFILE_INTERNSHIPS_ERROR,
	PROFILE_INTERNSHIPS_START
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IInternship} from '../../../interfaces/models/IInternship';


export type IProfileInternshipsActions = InferActionTypes<typeof actionsCreators>;

type IProfileInternshipsState = {
	isLoading: boolean,
	error: string,
	internships: IInternship[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1},
	hours: number
};

const initialState: IProfileInternshipsState = {
	isLoading: false,
	error: null,
	internships: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: {},
	hours: 30
};

const profileInternshipsReducer = (state = initialState,
								 action: IProfileInternshipsActions
								): IProfileInternshipsState => {
	switch(action.type){
		case PROFILE_INTERNSHIPS_START:
			return {...state, isLoading: true, error: null};

		case PROFILE_INTERNSHIPS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case PROFILE_INTERNSHIPS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				internships: action.payload
			};

		case PROFILE_INTERNSHIPS_CHANGE_SORT:
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

export default profileInternshipsReducer;
