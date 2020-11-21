import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import {IDeleteCommissionActions} from './reducer';

import {deleteCommissionError, deleteCommissionStart, deleteCommissionSuccess} from './actions';
import {allCommissionsDelete} from '../all/actions';
import commissionsApi from '../../../utils/api/models/commissionsApi';


type IActions = IDeleteCommissionActions | ReturnType<typeof allCommissionsDelete>;
export type ICommissionEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteCommission = (id: number): ICommissionEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteCommissionStart(id));

		try{
			await commissionsApi.deleteCommission(id);

			dispatch(deleteCommissionSuccess(id));
			dispatch(allCommissionsDelete(id));
			toast.success(i18next.t('messages.commissions.delete', {id}));
		}
		catch (e) {
			dispatch(deleteCommissionError(id, e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkDeleteCommission;
