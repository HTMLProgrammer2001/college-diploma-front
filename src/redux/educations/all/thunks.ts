import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllEducationsActions} from './reducer';

import {
	allEducationsError,
	allEducationsStart,
	allEducationsSuccess
} from './actions';
import {selectAllEducationsPagination, selectAllEducationsSort} from './selectors';
import educationsApi from '../../../utils/api/models/educationsApi';


export type IAllEducationsThunkAction = ThunkAction<void, RootState, unknown, IAllEducationsActions>;

const thunkAllEducations = (page: number = 1): IAllEducationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllEducationsActions>, getState) => {
		dispatch(allEducationsStart());

		try{
			const form = getFormValues('educationsFilterForm'),
				sort = selectAllEducationsSort(getState()),
				pagination = selectAllEducationsPagination(getState());

			const resp = await educationsApi.getEducations(form(getState()), sort, page, pagination.pageSize);
			dispatch(allEducationsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allEducationsError(e.message));
		}
	};
};

export default thunkAllEducations;
