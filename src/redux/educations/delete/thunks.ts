import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteEducationActions} from './reducer';

import {deleteEducationError, deleteEducationStart, deleteEducationSuccess} from './actions';
import {allEducationsDelete} from '../all/actions';
import educationsApi from '../../../utils/api/models/educationsApi';


type IActions = IDeleteEducationActions | ReturnType<typeof allEducationsDelete>;
export type IEducationEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteEducation = (id: number): IEducationEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteEducationStart(id));

		try{
			await educationsApi.deleteEducation(id);

			dispatch(deleteEducationSuccess(id));
			dispatch(allEducationsDelete(id));
			toast.success(`Образование с id ${id} удалено`);
		}
		catch (e) {
			dispatch(deleteEducationError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteEducation;
