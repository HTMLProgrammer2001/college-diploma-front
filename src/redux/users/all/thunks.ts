import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllUsersActions} from './reducer';

import {
	allUsersError,
	allUsersStart,
	allUsersSuccess
} from './actions';
import {selectAllUsersPagination, selectAllUsersSort} from './selectors';
import usersApi from '../../../utils/api/models/usersApi';


export type IAllUsersThunkAction = ThunkAction<void, RootState, unknown, IAllUsersActions>;

const thunkAllUsers = (page: number = 1): IAllUsersThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllUsersActions>, getState) => {
		dispatch(allUsersStart());

		try{
			const form = getFormValues('usersFilterForm'),
				sort = selectAllUsersSort(getState()),
				pagination = selectAllUsersPagination(getState());

			const resp = await usersApi.getUsers(form(getState()), sort, page, pagination.pageSize);
			dispatch(allUsersSuccess(resp.data));
		}
		catch (e) {
			dispatch(allUsersError(e.message));
		}
	};
};

export default thunkAllUsers;
