import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../../index';
import internshipsApi from '../../../../utils/api/models/internshipsApi';


export type IInternshipEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditInternship = (id: number, vals: any): IInternshipEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('internshipsEditForm'));

		try{
			await internshipsApi.editInternship(id, vals);

			dispatch(stopSubmit('internshipsEditForm'));
			toast.success('Стажировка отредактирована');
		}
		catch (e) {
			dispatch(stopSubmit('internshipsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditInternship;
