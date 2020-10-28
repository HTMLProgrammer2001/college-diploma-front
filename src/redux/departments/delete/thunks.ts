import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../index';
import {IDeleteDepartmentActions} from './reducer';

import departmentsApi from '../../../utils/api/models/departmentsApi';
import {deleteDepartmentError, deleteDepartmentStart, deleteDepartmentSuccess} from './actions';


export type IDepartmentEditThunkAction = ThunkAction<void, RootState, unknown, IDeleteDepartmentActions>;

const thunkDeleteDepartment = (id: number): IDepartmentEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IDeleteDepartmentActions>) => {
		dispatch(deleteDepartmentStart(id));

		try{
			await departmentsApi.deleteDepartment(id);
			dispatch(deleteDepartmentSuccess(id));
		}
		catch (e) {
			dispatch(deleteDepartmentError(id, e.response?.data.message || e.message));
		}
	};
};

export default thunkDeleteDepartment;
