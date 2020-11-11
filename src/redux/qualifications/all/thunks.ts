import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllQualificationsActions} from './reducer';

import {
	allQualificationsError,
	allQualificationsStart,
	allQualificationsSuccess
} from './actions';
import {selectAllQualificationsPagination, selectAllQualificationsSort} from './selectors';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';


export type IAllQualificationsThunkAction = ThunkAction<void, RootState, unknown, IAllQualificationsActions>;

const thunkAllQualifications = (page: number = 1): IAllQualificationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllQualificationsActions>, getState) => {
		dispatch(allQualificationsStart());

		try{
			const form = getFormValues('qualificationsFilterForm'),
				sort = selectAllQualificationsSort(getState()),
				pagination = selectAllQualificationsPagination(getState());

			const resp = await qualificationsApi.getQualifications(form(getState()), sort, page, pagination.pageSize);
			dispatch(allQualificationsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allQualificationsError(e.message));
		}
	};
};

export default thunkAllQualifications;
