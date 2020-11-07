import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../../index';
import educationsApi from '../../../../utils/api/models/educationsApi';


export type IEducationEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditEducation = (id: number, vals: any): IEducationEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('educationsEditForm'));

		try{
			await educationsApi.editEducation(id, vals);

			dispatch(stopSubmit('educationsEditForm'));
			toast.success('Образование отредактировано');
		}
		catch (e) {
			dispatch(stopSubmit('educationsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditEducation;
