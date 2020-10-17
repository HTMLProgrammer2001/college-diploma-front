import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../';
import userActionsApi from '../../utils/api/userActionsApi';
import {ILoginFormData} from '../../pages/LoginPage/LoginForm';


export type ILoginThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkLogin = (vals: ILoginFormData): ILoginThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('login'));

		try{

		}
		catch (e) {
			dispatch(stopSubmit('login', {
				_error: e.message
			}));
		}
	};
};

export default thunkLogin;
