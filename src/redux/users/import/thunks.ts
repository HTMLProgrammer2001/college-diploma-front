import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import usersApi from '../../../utils/api/models/usersApi';


export type IImportUserThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkImportUser = (vals: any): IImportUserThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		console.log('In thunk');

		dispatch(startSubmit('usersImportForm'));

		try{
			await usersApi.importUsers(vals);
			dispatch(stopSubmit('usersImportForm'));
			dispatch(reset('usersImportForm'));

			toast.success('Пользователи импортированы');
		}
		catch (e) {
			dispatch(stopSubmit('usersImportForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkImportUser;
