import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllHonorsActions} from './reducer';

import {
	allHonorsError,
	allHonorsStart,
	allHonorsSuccess
} from './actions';
import {selectAllHonorsPagination, selectAllHonorsSort} from './selectors';
import honorsApi from '../../../utils/api/models/honorsApi';


export type IAllHonorsThunkAction = ThunkAction<void, RootState, unknown, IAllHonorsActions>;

const thunkAllHonors = (page: number = 1): IAllHonorsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllHonorsActions>, getState) => {
		dispatch(allHonorsStart());

		try{
			const form = getFormValues('honorsFilterForm'),
				sort = selectAllHonorsSort(getState()),
				pagination = selectAllHonorsPagination(getState());

			const resp = await honorsApi.getHonors(form(getState()), sort, page, pagination.pageSize);
			dispatch(allHonorsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allHonorsError(e.message));
		}
	};
};

export default thunkAllHonors;
