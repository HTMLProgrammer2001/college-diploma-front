import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../';
import userActionsApi from '../../utils/api/userActionsApi';
import {ILoginFormData} from '../../pages/LoginPage/LoginForm';
import {meLoadSuccess} from '../me/actions';


export type ILoginThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkLogin = (vals: ILoginFormData): ILoginThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		console.log(vals);

		dispatch(startSubmit('loginForm'));

		try{
			const resp = await userActionsApi.login(vals);

			localStorage.setItem('token', resp.data.token);
			dispatch(meLoadSuccess(resp.data.user));
			dispatch(stopSubmit('loginForm'));
		}
		catch (e) {
			dispatch(stopSubmit('loginForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));
		}
	};
};

export default thunkLogin;
