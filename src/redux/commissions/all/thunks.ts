import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IAllCommissionsActions} from './reducer';

import {
	allCommissionsError,
	allCommissionsStart,
	allCommissionsSuccess
} from './actions';
import {selectAllCommissionsPagination, selectAllCommissionsSort} from './selectors';
import commissionsApi from '../../../utils/api/models/commissionsApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllCommissionsThunkAction = ThunkAction<void, RootState, unknown, IAllCommissionsActions>;

const thunkAllCommissions = (page: number = 1): IAllCommissionsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllCommissionsActions>, getState) => {
		//start loading commissions
		dispatch(allCommissionsStart());

		try{
			//get data to query
			const form = getFormValues('commissionsFilterForm'),
				filters = form(getState()),
				sort = selectAllCommissionsSort(getState()),
				pagination = selectAllCommissionsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send it to store
			const resp = await commissionsApi.getCommissions(form(getState()), sort, page, pagination.pageSize);
			dispatch(allCommissionsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allCommissionsError(e.message));
		}
	};
};

export default thunkAllCommissions;
