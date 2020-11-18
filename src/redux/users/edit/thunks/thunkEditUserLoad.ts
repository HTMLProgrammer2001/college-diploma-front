import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditUserActions} from '../reducer';
import {RootState} from '../../../';

import {editUserLoadStart, editUserLoadError, editUserLoadSuccess} from '../actions';
import usersApi from '../../../../utils/api/models/usersApi';


export type IEditUserLoadThunkAction = ThunkAction<void, RootState, unknown, IEditUserActions>;

const thunkEditUserLoad = (id: number): IEditUserLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditUserActions>) => {
		dispatch(editUserLoadStart());

		try{
			const resp = await usersApi.getUser(id);
			dispatch(editUserLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editUserLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditUserLoad;
