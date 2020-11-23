import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IAllQualificationsActions} from './reducer';

import {
	allQualificationsError,
	allQualificationsStart,
	allQualificationsSuccess
} from './actions';
import {selectAllQualificationsPagination, selectAllQualificationsSort} from './selectors';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllQualificationsThunkAction = ThunkAction<void, RootState, unknown, IAllQualificationsActions>;

const thunkAllQualifications = (page: number = 1): IAllQualificationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllQualificationsActions>, getState) => {
		//start loading qualifications
		dispatch(allQualificationsStart());

		try{
			//get data for query
			const form = getFormValues('qualificationsFilterForm'),
				filters = form(getState()),
				sort = selectAllQualificationsSort(getState()),
				pagination = selectAllQualificationsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//set data to store
			const resp = await qualificationsApi.getQualifications(filters, sort, page, pagination.pageSize);
			dispatch(allQualificationsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allQualificationsError(e.message));
		}
	};
};

export default thunkAllQualifications;
