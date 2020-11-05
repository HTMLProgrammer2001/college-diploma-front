import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../../index';
import honorsApi from '../../../../utils/api/models/honorsApi';


export type IHonorEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditHonor = (id: number, vals: any): IHonorEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('publicationsEditForm'));

		try{
			await honorsApi.editHonor(id, vals);

			dispatch(stopSubmit('honorsEditForm'));
			toast.success('Награда отредактирована');
		}
		catch (e) {
			dispatch(stopSubmit('honorsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditHonor;
