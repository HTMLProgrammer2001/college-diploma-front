import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import internshipsApi from '../../../utils/api/models/internshipsApi';


export type IAddInternshipThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddInternship = (vals: any): IAddInternshipThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('internshipsAddForm'));

		try{
			await internshipsApi.addInternship(vals);
			dispatch(stopSubmit('internshipsAddForm'));
			dispatch(reset('internshipsAddForm'));

			toast.success('Стажировка добавлена');
		}
		catch (e) {
			dispatch(stopSubmit('internshipsAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddInternship;
