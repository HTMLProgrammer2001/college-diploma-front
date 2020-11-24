import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {replace} from 'connected-react-router';

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
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllRanksThunkAction = ThunkAction<void, RootState, unknown, IAllRanksActions>;

const thunkAllRanks = (page: number = 1): IAllRanksThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllRanksActions>, getState) => {
		//start ranks loading
		dispatch(allRanksStart());

		try{
			//get data for query
			const form = getFormValues('ranksFilterForm'),
				filters = form(getState()),
				sort = selectAllRanksSort(getState()),
				pagination = selectAllRanksPagination(getState());

			//change URL
			let newValues = Object.assign(filters || {}, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await ranksApi.getRanks(form(getState()), sort, page, pagination.pageSize);
			dispatch(allRanksSuccess(resp.data));
		}
		catch (e) {
			dispatch(allRanksError(e.message));
		}
	};
};

export default thunkAllRanks;
