import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {ILogoutActionTypes} from './reducer';
import {logoutError, logoutSuccess, logoutStart} from './actions';
import userActionsApi from '../../utils/api/userActionsApi';
import {meLoadSuccess} from '../me/actions';


type ILogoutAc = ILogoutActionTypes | ReturnType<typeof meLoadSuccess>;
export type ILogoutThunkAction = ThunkAction<Promise<boolean>, RootState, unknown, ILogoutAc>;

const thunkLogout = (): ILogoutThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, ILogoutAc>) => {
		dispatch(logoutStart());

		try{
			await userActionsApi.logout();
			dispatch(logoutSuccess());
			dispatch(meLoadSuccess(null));

			return true;
		}
		catch (e) {
			dispatch(logoutError(e.message));

			return false;
		}
	};
};

export default thunkLogout;
