import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../../../index';
import {IDepartmentsEditData} from '../../../../pages/Departments/edit/EditDepartmentForm';
import departmentsApi from '../../../../utils/api/models/departmentsApi';
import {toast} from 'react-toastify';


export type IDepartmentEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditDepartment = (id: number, vals: IDepartmentsEditData): IDepartmentEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('departmentsEditForm'));

		try{
			await departmentsApi.editDepartment(id, vals);

			dispatch(stopSubmit('departmentsEditForm'));
			toast.success('Отделение отредактировано');
		}
		catch (e) {
			dispatch(stopSubmit('departmentsEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditDepartment;
