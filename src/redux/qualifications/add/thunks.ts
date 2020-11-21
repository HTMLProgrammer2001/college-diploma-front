import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';


export type IAddQualificationThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddQualification = (vals: any): IAddQualificationThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('qualificationsAddForm'));

		try{
			await qualificationsApi.addQualification(vals);
			dispatch(stopSubmit('qualificationsAddForm'));
			dispatch(reset('qualificationsAddForm'));

			toast.success(i18next.t('messages.qualifications.add'));
		}
		catch (e) {
			dispatch(stopSubmit('qualificationsAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddQualification;
