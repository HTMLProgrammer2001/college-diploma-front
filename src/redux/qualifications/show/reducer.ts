import {
	QUALIFICATIONS_SHOW_SUCCESS,
	QUALIFICATIONS_SHOW_ERROR,
	QUALIFICATIONS_SHOW_START,
	QUALIFICATIONS_SHOW_CHANGE_SORT
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IQualification} from '../../../interfaces/models/IQualification';


export type IShowQualificationsActions = InferActionTypes<typeof actionsCreators>;

type IShowQualificationsState = {
	isLoading: boolean,
	error: string,
	qualifications: IQualification[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IShowQualificationsState = {
	isLoading: false,
	error: null,
	qualifications: [],
	currentPage: 1,
	total: 6,
	pageSize: 5,
	sort: {}
};

const showQualificationsReducer = (state = initialState,
								 action: IShowQualificationsActions
								): IShowQualificationsState => {
	switch(action.type){
		case QUALIFICATIONS_SHOW_START:
			return {...state, isLoading: true, error: null};

		case QUALIFICATIONS_SHOW_ERROR:
			return {...state, isLoading: false, error: action.error};

		case QUALIFICATIONS_SHOW_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				qualifications: action.payload
			};

		case QUALIFICATIONS_SHOW_CHANGE_SORT:
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

export default showQualificationsReducer;
