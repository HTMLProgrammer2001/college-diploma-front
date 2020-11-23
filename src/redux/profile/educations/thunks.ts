import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IProfileEducationsActions} from './reducer';

import {
	profileEducationsError,
	profileEducationsStart,
	profileEducationsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfileEducationsPagination, selectProfileEducationsSort} from './selectors';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IProfileEducationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileEducationsActions>;

const thunkProfileEducations = (userID: number, page = 1): IProfileEducationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileEducationsActions>, getState) => {
		//start loading
		dispatch(profileEducationsStart());

		try{
			//get data for query
			const filtersFunc: (state: RootState) => any = getFormValues('profileEducationsFilter'),
				filters = filtersFunc(getState()),
				sort = selectProfileEducationsSort(getState()),
				pagination = selectProfileEducationsPagination(getState());

			//change URL
			let newValues = Object.assign(filters  || {}, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//get educations
			const resp = await profileApi.getEducations({
				filters: filters, user: userID, sort, page,
				pageSize: pagination.pageSize
			});

			//get data
			dispatch(profileEducationsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(profileEducationsError(e.message));
		}
	};
};

export default thunkProfileEducations;

