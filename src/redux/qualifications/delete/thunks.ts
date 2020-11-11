import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteQualificationActions} from './reducer';

import {deleteQualificationError, deleteQualificationStart, deleteQualificationSuccess} from './actions';
import {allQualificationsDelete} from '../all/actions';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';


type IActions = IDeleteQualificationActions | ReturnType<typeof allQualificationsDelete>;
export type IQualificationEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteQualification = (id: number): IQualificationEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteQualificationStart(id));

		try{
			await qualificationsApi.deleteQualification(id);

			dispatch(deleteQualificationSuccess(id));
			dispatch(allQualificationsDelete(id));
			toast.success(`Повышение квалификации с id ${id} удалено`);
		}
		catch (e) {
			dispatch(deleteQualificationError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteQualification;
