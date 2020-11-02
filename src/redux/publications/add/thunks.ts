import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import publicationsApi from '../../../utils/api/models/publicationsApi';


export type IAddPublicationThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddPublication = (vals: any): IAddPublicationThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('publicationsAddForm'));

		try{
			await publicationsApi.addPublication(vals);
			dispatch(stopSubmit('publicationsAddForm'));
			dispatch(reset('publicationsAddForm'));

			toast.success('Публикация добавлена');
		}
		catch (e) {
			dispatch(stopSubmit('publicationsAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddPublication;
