import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditDepartmentActions} from '../reducer';
import {RootState} from '../../../';

import {editDepartmentLoadStart, editDepartmentLoadError, editDepartmentLoadSuccess} from '../actions';
import departmentsApi from '../../../../utils/api/models/departmentsApi';


export type IEditDepartmentLoadThunkAction = ThunkAction<void, RootState, unknown, IEditDepartmentActions>;

const thunkEditDepartmentLoad = (id: number): IEditDepartmentLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditDepartmentActions>) => {
		dispatch(editDepartmentLoadStart());

		try{
			const resp = await departmentsApi.getDepartment(id);
			dispatch(editDepartmentLoadSuccess(resp.data));
		}
		catch (e) {
			dispatch(editDepartmentLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditDepartmentLoad;
