import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';
import i18next from 'i18next';

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
			toast.success(i18next.t('messages.internships.delete', {id}));
		}
		catch (e) {
			dispatch(deleteInternshipError(id, e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkDeleteInternship;
