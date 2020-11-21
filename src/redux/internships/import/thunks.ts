import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';


import {RootState} from '../../';
import internshipsApi from '../../../utils/api/models/internshipsApi';


export type IImportInternshipThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkImportInternship = (vals: any): IImportInternshipThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('internshipsImportForm'));

		try{
			await internshipsApi.importInternships(vals);
			dispatch(stopSubmit('internshipsImportForm'));
			dispatch(reset('internshipsImportForm'));

			toast.success(i18next.t('messages.internships.import'));
		}
		catch (e) {
			dispatch(stopSubmit('internshipsImportForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkImportInternship;
