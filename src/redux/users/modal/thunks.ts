import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {userModalError, userModalStart, userModalSuccess} from './actions';
import usersApi from '../../../utils/api/models/usersApi';


export type IUserModalThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkModalUser = (id: number): IUserModalThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(userModalStart());

		try{
			const resp = await usersApi.getUser(id);
			dispatch(userModalSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(userModalError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkModalUser;
