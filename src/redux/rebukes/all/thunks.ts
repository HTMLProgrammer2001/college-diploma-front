import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllRebukesActions} from './reducer';

import {
	allRebukesError,
	allRebukesStart,
	allRebukesSuccess
} from './actions';
import {selectAllRebukesPagination, selectAllRebukesSort} from './selectors';
import rebukesApi from '../../../utils/api/models/rebukesApi';


export type IAllRebukesThunkAction = ThunkAction<void, RootState, unknown, IAllRebukesActions>;

const thunkAllRebukes = (page: number = 1): IAllRebukesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllRebukesActions>, getState) => {
		dispatch(allRebukesStart());

		try{
			const form = getFormValues('rebukesFilterForm'),
				sort = selectAllRebukesSort(getState()),
				pagination = selectAllRebukesPagination(getState());

			const resp = await rebukesApi.getRebukes(form(getState()), sort, page, pagination.pageSize);
			dispatch(allRebukesSuccess(resp.data));
		}
		catch (e) {
			dispatch(allRebukesError(e.message));
		}
	};
};

export default thunkAllRebukes;
