import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {ILogoutActionTypes} from './reducer';
import {logoutError, logoutSuccess, logoutStart} from './actions';
import userActionsApi from '../../utils/api/userActionsApi';


export type ILogoutThunkAction = ThunkAction<void, RootState, unknown, ILogoutActionTypes>;

const thunkLogout = (): ILogoutThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, ILogoutActionTypes>) => {
		dispatch(logoutStart());

		try{

		}
		catch (e) {
			dispatch(logoutError(e.message));
		}
	};
};

export default thunkLogout;
