import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';


export type IImportQualificationThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkImportQualification = (vals: any): IImportQualificationThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('qualificationsImportForm'));

		try{
			await qualificationsApi.importQualifications(vals);
			dispatch(stopSubmit('qualificationsImportForm'));
			dispatch(reset('qualificationsImportForm'));

			toast.success('Повышения квалификаций импортированы');
		}
		catch (e) {
			dispatch(stopSubmit('qualificationsImportForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkImportQualification;
