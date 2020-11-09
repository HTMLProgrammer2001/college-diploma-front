import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllInternshipsActions} from './reducer';

import {
	allInternshipsError,
	allInternshipsStart,
	allInternshipsSuccess
} from './actions';
import {selectAllInternshipsPagination, selectAllInternshipsSort} from './selectors';
import internshipsApi from '../../../utils/api/models/internshipsApi';


export type IAllInternshipsThunkAction = ThunkAction<void, RootState, unknown, IAllInternshipsActions>;

const thunkAllInternships = (page: number = 1): IAllInternshipsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllInternshipsActions>, getState) => {
		dispatch(allInternshipsStart());

		try{
			const form = getFormValues('internshipsFilterForm'),
				sort = selectAllInternshipsSort(getState()),
				pagination = selectAllInternshipsPagination(getState());

			const resp = await internshipsApi.getInternships(form(getState()), sort, page, pagination.pageSize);
			dispatch(allInternshipsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allInternshipsError(e.message));
		}
	};
};

export default thunkAllInternships;
