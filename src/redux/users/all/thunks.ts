import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IAllUsersActions} from './reducer';

import {
	allUsersError,
	allUsersStart,
	allUsersSuccess
} from './actions';
import {selectAllUsersPagination, selectAllUsersSort} from './selectors';
import usersApi from '../../../utils/api/models/usersApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllUsersThunkAction = ThunkAction<void, RootState, unknown, IAllUsersActions>;

const thunkAllUsers = (page: number = 1): IAllUsersThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllUsersActions>, getState) => {
		//start loading users
		dispatch(allUsersStart());

		try{
			//get data for query
			const form = getFormValues('usersFilterForm'),
				filters = form(getState()),
				sort = selectAllUsersSort(getState()),
				pagination = selectAllUsersPagination(getState());

			//change URL
			let newValues = Object.assign(filters || {}, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await usersApi.getUsers(filters, sort, page, pagination.pageSize);
			dispatch(allUsersSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allUsersError(e.message));
		}
	};
};

export default thunkAllUsers;
