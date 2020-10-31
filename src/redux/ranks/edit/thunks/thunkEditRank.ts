import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../../index';
import ranksApi from '../../../../utils/api/models/ranksApi';


export type IRankEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditRank = (id: number, vals: any): IRankEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('ranksEditForm'));

		try{
			await ranksApi.editRank(id, vals);

			dispatch(stopSubmit('ranksEditForm'));
			toast.success('Должность отредактирована');
		}
		catch (e) {
			dispatch(stopSubmit('ranksEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditRank;
