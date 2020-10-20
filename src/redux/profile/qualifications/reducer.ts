import {
	PROFILE_QUALIFICATIONS_CHANGE_SORT,
	PROFILE_QUALIFICATIONS_SUCCESS,
	PROFILE_QUALIFICATIONS_ERROR,
	PROFILE_QUALIFICATIONS_START
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IQualification} from '../../../interfaces/IQualification';


export type IProfileQualificationsActions = InferActionTypes<typeof actionsCreators>;

type IProfileQualificationsState = {
	isLoading: boolean,
	error: string,
	qualifications: IQualification[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IProfileQualificationsState = {
	isLoading: false,
	error: null,
	qualifications: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: {}
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
				qualifications: action.payload
			};

		case PROFILE_QUALIFICATIONS_CHANGE_SORT:
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

export default profileQualificationsReducer;
