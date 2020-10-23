import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../../';
import userActionsApi from '../../../utils/api/userActionsApi';
import {IProfileEditData} from '../../../pages/ProfileEditPage/EditProfileForm';
import {meLoadSuccess} from '../../me/actions';


export type IMeThunkAction = ThunkAction<{}, RootState, unknown, Action<any>>;

const thunkProfileEdit = (vals: IProfileEditData): IMeThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('editProfileForm'));

		try{
			const resp = await userActionsApi.editProfile(vals);

			dispatch(meLoadSuccess(resp.data.newUser));
			dispatch(stopSubmit('editProfileForm'));
		}
		catch (e) {
			dispatch(stopSubmit('editProfileForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));
		}
	};
};

export default thunkProfileEdit;
