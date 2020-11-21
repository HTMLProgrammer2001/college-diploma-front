import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import rebukesApi from '../../../utils/api/models/rebukesApi';


export type IAddRebukeThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddRebuke = (vals: any): IAddRebukeThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('rebukesAddForm'));

		try{
			await rebukesApi.addRebuke(vals);
			dispatch(stopSubmit('rebukesAddForm'));
			dispatch(reset('rebukesAddForm'));

			toast.success(i18next.t('messages.rebukes.add'));
		}
		catch (e) {
			dispatch(stopSubmit('rebukesAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddRebuke;
