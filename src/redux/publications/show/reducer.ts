import {
	PUBLICATIONS_SHOW_SUCCESS,
	PUBLICATIONS_SHOW_ERROR,
	PUBLICATIONS_SHOW_START,
	PUBLICATIONS_SHOW_CHANGE_SORT
} from './types';
import {InferActionTypes} from '../../';
import * as actionsCreators from './actions';
import {IPublication} from '../../../interfaces/models/IPublication';


export type IShowPublicationsActions = InferActionTypes<typeof actionsCreators>;

type IShowPublicationsState = {
	isLoading: boolean,
	error: string,
	publications: IPublication[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: {[key: string]: -1 | 1}
};

const initialState: IShowPublicationsState = {
	isLoading: false,
	error: null,
	publications: [
		{id: 1, title: 'Test', url: '', date_of_publication: '20.03.2001', description: '', publisher: 'Publisher', authors: 'Author'},
		{id: 2, title: 'Test', url: '', date_of_publication: '20.03.2001', description: '', publisher: 'Publisher', authors: 'Author'}
	],
	currentPage: 3,
	total: 3,
	pageSize: 5,
	sort: {}
};

const showPublicationsReducer = (state = initialState,
								 action: IShowPublicationsActions
								): IShowPublicationsState => {
	switch(action.type){
		case PUBLICATIONS_SHOW_START:
			return {isLoading: true, error: null, ...state};

		case PUBLICATIONS_SHOW_ERROR:
			return {isLoading: false, error: action.error, ...state};

		case PUBLICATIONS_SHOW_SUCCESS:
			return {
				isLoading: false,
				error: null,
				publications: action.payload,
				...state
			};

		case PUBLICATIONS_SHOW_CHANGE_SORT:
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

export default showPublicationsReducer;
