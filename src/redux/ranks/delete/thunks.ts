import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteRankActions} from './reducer';

import {deleteRankError, deleteRankStart, deleteRankSuccess} from './actions';
import {allRanksDelete} from '../all/actions';
import ranksApi from '../../../utils/api/models/ranksApi';
import i18next from 'i18next';


type IActions = IDeleteRankActions | ReturnType<typeof allRanksDelete>;
export type IRankEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteRank = (id: number): IRankEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteRankStart(id));

		try{
			await ranksApi.deleteRank(id);

			dispatch(deleteRankSuccess(id));
			dispatch(allRanksDelete(id));
			toast.success(i18next.t('messages.ranks.delete', {id}));
		}
		catch (e) {
			dispatch(deleteRankError(id, e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkDeleteRank;
