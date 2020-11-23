import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IAllEducationsActions} from './reducer';

import {
	allEducationsError,
	allEducationsStart,
	allEducationsSuccess
} from './actions';
import {selectAllEducationsPagination, selectAllEducationsSort} from './selectors';
import educationsApi from '../../../utils/api/models/educationsApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllEducationsThunkAction = ThunkAction<void, RootState, unknown, IAllEducationsActions>;

const thunkAllEducations = (page: number = 1): IAllEducationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllEducationsActions>, getState) => {
		//start loading educations
		dispatch(allEducationsStart());

		try{
			//parse data to query
			const form = getFormValues('educationsFilterForm'),
				filters = form(getState()),
				sort = selectAllEducationsSort(getState()),
				pagination = selectAllEducationsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await educationsApi.getEducations(filters, sort, page, pagination.pageSize);
			dispatch(allEducationsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allEducationsError(e.message));
		}
	};
};

export default thunkAllEducations;
