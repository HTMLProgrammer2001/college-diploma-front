import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import ranksApi from '../../../utils/api/models/ranksApi';


export type IAddRankThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddRank = (vals: any): IAddRankThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('ranksAddForm'));

		try{
			await ranksApi.addRank(vals);
			dispatch(stopSubmit('ranksAddForm'));
			dispatch(reset('ranksAddForm'));

			toast.success('Должность добавлена');
		}
		catch (e) {
			dispatch(stopSubmit('ranksAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddRank;
