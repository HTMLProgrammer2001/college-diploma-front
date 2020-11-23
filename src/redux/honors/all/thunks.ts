import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IAllHonorsActions} from './reducer';

import {
	allHonorsError,
	allHonorsStart,
	allHonorsSuccess
} from './actions';
import {selectAllHonorsPagination, selectAllHonorsSort} from './selectors';
import honorsApi from '../../../utils/api/models/honorsApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllHonorsThunkAction = ThunkAction<void, RootState, unknown, IAllHonorsActions>;

const thunkAllHonors = (page: number = 1): IAllHonorsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllHonorsActions>, getState) => {
		//start loading honors
		dispatch(allHonorsStart());

		try{
			//get data for query
			const form = getFormValues('honorsFilterForm'),
				filters = form(getState()),
				sort = selectAllHonorsSort(getState()),
				pagination = selectAllHonorsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await honorsApi.getHonors(filters, sort, page, pagination.pageSize);
			dispatch(allHonorsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allHonorsError(e.message));
		}
	};
};

export default thunkAllHonors;
