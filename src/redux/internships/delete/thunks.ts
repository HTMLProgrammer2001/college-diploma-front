import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteInternshipActions} from './reducer';

import {deleteInternshipError, deleteInternshipStart, deleteInternshipSuccess} from './actions';
import {allInternshipsDelete} from '../all/actions';
import internshipsApi from '../../../utils/api/models/internshipsApi';


type IActions = IDeleteInternshipActions | ReturnType<typeof allInternshipsDelete>;
export type IInternshipEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteInternship = (id: number): IInternshipEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteInternshipStart(id));

		try{
			await internshipsApi.deleteInternship(id);

			dispatch(deleteInternshipSuccess(id));
			dispatch(allInternshipsDelete(id));
			toast.success(`Стажировка с id ${id} удалена`);
		}
		catch (e) {
			dispatch(deleteInternshipError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteInternship;
