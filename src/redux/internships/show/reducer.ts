import {
	INTERNSHIPS_SHOW_SUCCESS,
	INTERNSHIPS_SHOW_ERROR,
	INTERNSHIPS_SHOW_START,
	INTERNSHIPS_SHOW_CHANGE_SORT
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IInternship} from '../../../interfaces/IInternship';


export type IShowInternshipsActions = InferActionTypes<typeof actionsCreators>;

type IShowInternshipsState = {
	isLoading: boolean,
	error: string,
	internships: IInternship[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IShowInternshipsState = {
	isLoading: false,
	error: null,
	internships: [],
	currentPage: 2,
	total: 10,
	pageSize: 5,
	sort: {}
};

const showInternshipsReducer = (state = initialState,
								 action: IShowInternshipsActions
								): IShowInternshipsState => {
	switch(action.type){
		case INTERNSHIPS_SHOW_START:
			return {isLoading: true, error: null, ...state};

		case INTERNSHIPS_SHOW_ERROR:
			return {isLoading: false, error: action.error, ...state};

		case INTERNSHIPS_SHOW_SUCCESS:
			return {
				isLoading: false,
				error: null,
				internships: action.payload,
				...state
			};

		case INTERNSHIPS_SHOW_CHANGE_SORT:
			return {
				...state,
				sort: {
					...state.sort,
					[action.payload]: !state.sort[action.payload] ? 1 : state.sort[action.payload] == 1 ? -1 : undefined
				}
			}
	}

	return state;
};

export default showInternshipsReducer;
