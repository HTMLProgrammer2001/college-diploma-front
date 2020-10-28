import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IAllDepartmentsActions} from './reducer';

import {
	allDepartmentsError,
	allDepartmentsStart,
	allDepartmentsSuccess
} from './actions';
import {getFormValues} from 'redux-form';
import {selectAllDepartmentsPagination, selectAllDepartmentsSort} from './selectors';
import departmentsApi from '../../../utils/api/models/departmentsApi';


export type IAllDepartmentsThunkAction = ThunkAction<void, RootState, unknown, IAllDepartmentsActions>;

const thunkAllDepartments = (page: number = 1): IAllDepartmentsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllDepartmentsActions>, getState) => {
		dispatch(allDepartmentsStart());

		try{
			const form = getFormValues('departmentsFilterForm'),
				sort = selectAllDepartmentsSort(getState()),
				pagination = selectAllDepartmentsPagination(getState());

			const resp = await departmentsApi.getDepartments(form(getState()), sort, page, pagination.pageSize);
			dispatch(allDepartmentsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allDepartmentsError(e.message));
		}
	};
};

export default thunkAllDepartments;
