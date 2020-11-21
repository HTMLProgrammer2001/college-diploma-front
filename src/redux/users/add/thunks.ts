import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import usersApi from '../../../utils/api/models/usersApi';


export type IAddUserThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddUser = (vals: any): IAddUserThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('usersAddForm'));

		try{
			await usersApi.addUser(vals);
			dispatch(stopSubmit('usersAddForm'));
			dispatch(reset('usersAddForm'));

			toast.success(i18next.t('messages.users.add'));
		}
		catch (e) {
			dispatch(stopSubmit('usersAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddUser;
