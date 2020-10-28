import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../../index';
import {ICommissionsEditData} from '../../../../pages/Commissions/edit/EditCommissionForm';
import commissionsApi from '../../../../utils/api/models/commissionsApi';


export type ICommissionEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditCommission = (id: number, vals: ICommissionsEditData): ICommissionEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('departmentsEditForm'));

		try{
			await commissionsApi.editCommission(id, vals);

			dispatch(stopSubmit('commissionsEditForm'));
			toast.success('Комиссия отредактирована');
		}
		catch (e) {
			dispatch(stopSubmit('commissionsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditCommission;
