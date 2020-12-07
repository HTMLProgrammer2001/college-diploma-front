import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {IMeActionTypes} from './reducer';
import {meLoadError, meLoadStart, meLoadSuccess} from './actions';
import userActionsApi from '../../utils/api/userActionsApi';


export type IMeThunkAction = ThunkAction<Promise<boolean>, RootState, unknown, IMeActionTypes>;

const thunkMe = (): IMeThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IMeActionTypes>) => {
		//get token
		const token = localStorage.getItem('token');

		//if token not exist then user are not authorized
		if(!token)
			return;

		//start loading
		dispatch(meLoadStart());

		try{
			//make API call
			const meResponse = await userActionsApi.getMe(token);

			//set current user
			dispatch(meLoadSuccess(meResponse.data.user));

			//return success result
			return true;
		}
		catch (e) {
			//set error
			dispatch(meLoadError(e.message));
			return false;
		}
	};
};

export default thunkMe;
