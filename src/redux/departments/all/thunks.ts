import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {replace} from 'connected-react-router';

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
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllDepartmentsThunkAction = ThunkAction<void, RootState, unknown, IAllDepartmentsActions>;

const thunkAllDepartments = (page: number = 1): IAllDepartmentsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllDepartmentsActions>, getState) => {
		//start loading departments
		dispatch(allDepartmentsStart());

		try{
			//get data for query
			const form = getFormValues('departmentsFilterForm'),
				filters = form(getState()),
				sort = selectAllDepartmentsSort(getState()),
				pagination = selectAllDepartmentsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send to store
			const resp = await departmentsApi.getDepartments(filters, sort, page, pagination.pageSize);
			dispatch(allDepartmentsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allDepartmentsError(e.message));
		}
	};
};

export default thunkAllDepartments;
