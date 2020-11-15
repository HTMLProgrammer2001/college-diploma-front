import {
	ALL_USERS_CHANGE_SORT,
	ALL_USERS_SUCCESS,
	ALL_USERS_ERROR,
	ALL_USERS_START,
	ALL_USERS_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ISort} from '../../../interfaces/ISort';

import * as actionsCreators from './actions';
import changeSortHandler from '../../../utils/helpers/changeSortHandler';
import {IUserTable} from '../../../interfaces/models/IUserTable';


export type IAllUsersActions = InferActionTypes<typeof actionsCreators>;

type IAllUsersState = {
	isLoading: boolean,
	error: string,
	users: IUserTable[],
	currentPage: number,
	total: number,
	pageSize: number,
	sort: ISort[]
};

const initialState: IAllUsersState = {
	isLoading: false,
	error: null,
	users: [],
	currentPage: 0,
	total: 0,
	pageSize: 5,
	sort: []
};

const allUsersReducer = (state = initialState, action: IAllUsersActions): IAllUsersState => {
	switch(action.type){
		case ALL_USERS_START:
			return {...state, isLoading: true, error: null};

		case ALL_USERS_ERROR:
			return {...state, isLoading: false, error: action.error};

		case ALL_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				users: action.payload.data,
				pageSize: action.payload.meta.per_page,
				currentPage: action.payload.meta.current_page,
				total: action.payload.meta.total
			};

		case ALL_USERS_CHANGE_SORT:
			const sort = changeSortHandler(state.sort, action.payload);
			return {...state, sort};

		case ALL_USERS_DELETE:
			return {...state, users: state.users.filter(({id}) => id != action.payload)}
	}

	return state;
};

export default allUsersReducer;
