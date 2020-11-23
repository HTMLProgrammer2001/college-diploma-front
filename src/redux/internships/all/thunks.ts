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
import {replace} from "connected-react-router";
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllInternshipsThunkAction = ThunkAction<void, RootState, unknown, IAllInternshipsActions>;

const thunkAllInternships = (page: number = 1): IAllInternshipsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllInternshipsActions>, getState) => {
		//start loading internships
		dispatch(allInternshipsStart());

		try{
			//get data for query
			const form = getFormValues('internshipsFilterForm'),
				filters = form(getState()),
				sort = selectAllInternshipsSort(getState()),
				pagination = selectAllInternshipsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await internshipsApi.getInternships(filters, sort, page, pagination.pageSize);
			dispatch(allInternshipsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allInternshipsError(e.message));
		}
	};
};

export default thunkAllInternships;
