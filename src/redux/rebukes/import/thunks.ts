import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import rebukesApi from '../../../utils/api/models/rebukesApi';


export type IImportRebukeThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkImportRebuke = (vals: any): IImportRebukeThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('rebukesImportForm'));

		try{
			await rebukesApi.importRebukes(vals);
			dispatch(stopSubmit('rebukesImportForm'));
			dispatch(reset('rebukesImportForm'));

			toast.success('Выговоры импортированы');
		}
		catch (e) {
			dispatch(stopSubmit('rebukesImportForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkImportRebuke;
