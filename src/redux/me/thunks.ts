import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {IMeActionTypes} from './reducer';
import {meLoadError, meLoadStart, meLoadSuccess} from './actions';
import userActionsApi from '../../utils/api/userActionsApi';


export type IMeThunkAction = ThunkAction<void, RootState, unknown, IMeActionTypes>;

const thunkMe = (): IMeThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IMeActionTypes>) => {
		const token = localStorage.getItem('token');

		if(!token)
			return;

		dispatch(meLoadStart());

		try{
			const meResponse = await userActionsApi.getMe(token);
			dispatch(meLoadSuccess(meResponse.data));
		}
		catch (e) {
			dispatch(meLoadError(e.message));
		}
	};
};

export default thunkMe;
