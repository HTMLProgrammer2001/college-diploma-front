import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllCommissionsActions} from './reducer';

import {
	allCommissionsError,
	allCommissionsStart,
	allCommissionsSuccess
} from './actions';
import {selectAllCommissionsPagination, selectAllCommissionsSort} from './selectors';
import commissionsApi from '../../../utils/api/models/commissionsApi';


export type IAllCommissionsThunkAction = ThunkAction<void, RootState, unknown, IAllCommissionsActions>;

const thunkAllCommissions = (page: number = 1): IAllCommissionsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllCommissionsActions>, getState) => {
		dispatch(allCommissionsStart());

		try{
			const form = getFormValues('commissionsFilterForm'),
				sort = selectAllCommissionsSort(getState()),
				pagination = selectAllCommissionsPagination(getState());

			const resp = await commissionsApi.getCommissions(form(getState()), sort, page, pagination.pageSize);
			dispatch(allCommissionsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allCommissionsError(e.message));
		}
	};
};

export default thunkAllCommissions;
