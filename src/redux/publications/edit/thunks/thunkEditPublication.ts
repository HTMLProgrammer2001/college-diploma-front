import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../../index';
import publicationsApi from '../../../../utils/api/models/publicationsApi';


export type IPublicationEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditPublication = (id: number, vals: any): IPublicationEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('publicationsEditForm'));

		try{
			await publicationsApi.editPublication(id, vals);

			dispatch(stopSubmit('publicationsEditForm'));
			toast.success('Публикация отредактирована');
		}
		catch (e) {
			dispatch(stopSubmit('publicationsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditPublication;
