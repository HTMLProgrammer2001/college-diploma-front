import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {ICommissionsAddData} from '../../../pages/Commissions/add/AddCommissionForm';
import commissionsApi from '../../../utils/api/models/commissionsApi';


export type IAddCommissionThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddCommission = (vals: ICommissionsAddData): IAddCommissionThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('commissionsAddForm'));

		try{
			await commissionsApi.addCommission(vals);
			dispatch(stopSubmit('commissionsAddForm'));
			dispatch(reset('commissionsAddForm'));

			toast.success('Коммисия создана');
		}
		catch (e) {
			dispatch(stopSubmit('commissionsAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddCommission;
