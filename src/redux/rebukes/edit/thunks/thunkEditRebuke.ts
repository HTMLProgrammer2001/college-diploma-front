import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../../index';
import rebukesApi from '../../../../utils/api/models/rebukesApi';


export type IRebukeEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditRebuke = (id: number, vals: any): IRebukeEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('rebukesEditForm'));

		try{
			await rebukesApi.editRebuke(id, vals);

			dispatch(stopSubmit('rebukesEditForm'));
			toast.success(i18next.t('messages.rebukes.edit'));
		}
		catch (e) {
			dispatch(stopSubmit('rebukesEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditRebuke;
