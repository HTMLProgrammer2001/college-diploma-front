import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../../index';
import departmentsApi from '../../../utils/api/models/departmentsApi';
import {IDepartmentsAddData} from '../../../pages/Departments/add/AddDepartmentForm';
import {toast} from 'react-toastify';


export type IAddDepartmentThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddDepartment = (vals: IDepartmentsAddData): IAddDepartmentThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('departmentsAddForm'));

		try{
			await departmentsApi.addDepartment(vals);
			dispatch(stopSubmit('departmentsAddForm'));
			dispatch(reset('departmentsAddForm'));

			toast.success('Отделение создано');
		}
		catch (e) {
			dispatch(stopSubmit('departmentsAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddDepartment;
