import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteDepartmentActions} from './reducer';
import i18next from 'i18next';

import departmentsApi from '../../../utils/api/models/departmentsApi';
import {deleteDepartmentError, deleteDepartmentStart, deleteDepartmentSuccess} from './actions';
import {allDepartmentsDelete} from '../all/actions';


type IActions = IDeleteDepartmentActions | ReturnType<typeof allDepartmentsDelete>;
export type IDepartmentEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteDepartment = (id: number): IDepartmentEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteDepartmentStart(id));

		try{
			await departmentsApi.deleteDepartment(id);

			dispatch(deleteDepartmentSuccess(id));
			dispatch(allDepartmentsDelete(id));
			toast.success(i18next.t('messages.departments.delete', {id}));
		}
		catch (e) {
			dispatch(deleteDepartmentError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteDepartment;
