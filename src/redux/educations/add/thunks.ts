import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import educationsApi from '../../../utils/api/models/educationsApi';


export type IAddEducationThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddEducation = (vals: any): IAddEducationThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('educationsAddForm'));

		try{
			await educationsApi.addEducation(vals);
			dispatch(stopSubmit('educationsAddForm'));
			dispatch(reset('educationsAddForm'));

			toast.success('Образование добавлено');
		}
		catch (e) {
			dispatch(stopSubmit('educationsAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddEducation;
