import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IProfileQualificationsActions} from './reducer';

import {
	profileQualificationsError,
	profileQualificationsStart,
	profileQualificationsSuccess,
	profileQualificationsSetNext
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfileQualificationsPagination, selectProfileQualificationsSort} from './selectors';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IProfileQualificationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileQualificationsActions>;

const thunkProfileQualifications = (user: number, page: number = 1): IProfileQualificationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileQualificationsActions>, getState) => {
		//start loading qualifications
		dispatch(profileQualificationsStart());

		try{
			//get data for query
			const filtersFunc: (state: RootState) => any = getFormValues('profileQualificationsFilter'),
				filters = filtersFunc(getState()),
				sort = selectProfileQualificationsSort(getState()),
				{pageSize} = selectProfileQualificationsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//get data and send it to store
			let resp = await profileApi.getQualifications({filters, sort, page, pageSize, user});

			dispatch(profileQualificationsSuccess(resp.data));
			dispatch(profileQualificationsSetNext(resp.data.nextDate));
		}
		catch (e) {
			//show error
			dispatch(profileQualificationsError(e.message));
		}
	};
};

export default thunkProfileQualifications;
