import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IAllRanksActions} from './reducer';

import {
	allRanksError,
	allRanksStart,
	allRanksSuccess
} from './actions';
import {getFormValues} from 'redux-form';
import {selectAllRanksPagination, selectAllRanksSort} from './selectors';
import ranksApi from '../../../utils/api/models/ranksApi';


export type IAllRanksThunkAction = ThunkAction<void, RootState, unknown, IAllRanksActions>;

const thunkAllRanks = (page: number = 1): IAllRanksThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllRanksActions>, getState) => {
		dispatch(allRanksStart());

		try{
			const form = getFormValues('ranksFilterForm'),
				sort = selectAllRanksSort(getState()),
				pagination = selectAllRanksPagination(getState());

			const resp = await ranksApi.getRanks(form(getState()), sort, page, pagination.pageSize);
			dispatch(allRanksSuccess(resp.data));
		}
		catch (e) {
			dispatch(allRanksError(e.message));
		}
	};
};

export default thunkAllRanks;
