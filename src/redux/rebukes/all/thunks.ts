import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IAllRebukesActions} from './reducer';

import {
	allRebukesError,
	allRebukesStart,
	allRebukesSuccess
} from './actions';
import {selectAllRebukesPagination, selectAllRebukesSort} from './selectors';
import rebukesApi from '../../../utils/api/models/rebukesApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllRebukesThunkAction = ThunkAction<void, RootState, unknown, IAllRebukesActions>;

const thunkAllRebukes = (page: number = 1): IAllRebukesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllRebukesActions>, getState) => {
		//start rebukes loading
		dispatch(allRebukesStart());

		try{
			//get data for query
			const form = getFormValues('rebukesFilterForm'),
				filters = form(getState()),
				sort = selectAllRebukesSort(getState()),
				pagination = selectAllRebukesPagination(getState());

			//change URL
			let newValues = Object.assign(filters || {}, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await rebukesApi.getRebukes(filters, sort, page, pagination.pageSize);
			dispatch(allRebukesSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allRebukesError(e.message));
		}
	};
};

export default thunkAllRebukes;
