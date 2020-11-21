import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../../index';
import qualificationsApi from '../../../../utils/api/models/qualificationsApi';


export type IQualificationEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditQualification = (id: number, vals: any): IQualificationEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('qualificationsEditForm'));

		try{
			await qualificationsApi.editQualification(id, vals);

			dispatch(stopSubmit('qualificationsEditForm'));
			toast.success(i18next.t('messages.qualifications.edit'));
		}
		catch (e) {
			dispatch(stopSubmit('qualificationsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditQualification;
