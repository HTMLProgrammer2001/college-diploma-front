import {
	PROFILE_EDUCATIONS_CHANGE_SORT,
	PROFILE_EDUCATIONS_SUCCESS,
	PROFILE_EDUCATIONS_ERROR,
	PROFILE_EDUCATIONS_START
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IEducation} from '../../../interfaces/models/IEducation';


export type IProfileEducationsActions = InferActionTypes<typeof actionsCreators>;

type IProfileEducationsState = {
	isLoading: boolean,
	error: string,
	educations: IEducation[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IProfileEducationsState = {
	isLoading: false,
	error: null,
	educations: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: {}
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
				educations: action.payload
			};

		case PROFILE_EDUCATIONS_CHANGE_SORT:
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

export default profileEducationsReducer;
