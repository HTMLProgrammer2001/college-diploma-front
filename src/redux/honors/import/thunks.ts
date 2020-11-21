import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../';
import honorsApi from '../../../utils/api/models/honorsApi';


export type IImportHonorThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkImportHonor = (vals: any): IImportHonorThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('honorsImportForm'));

		try{
			await honorsApi.importHonors(vals);
			dispatch(stopSubmit('honorsImportForm'));
			dispatch(reset('honorsImportForm'));

			toast.success(i18next.t('messages.honors.import'));
		}
		catch (e) {
			dispatch(stopSubmit('honorsImportForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkImportHonor;
