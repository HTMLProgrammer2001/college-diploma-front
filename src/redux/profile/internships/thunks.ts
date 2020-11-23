import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../index';
import {IProfileInternshipsActions} from './reducer';
import {
	profileInternshipsError, profileInternshipsHours,
	profileInternshipsStart,
	profileInternshipsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfileInternshipsPagination, selectProfileInternshipsSort} from './selectors';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IProfileInternshipsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileInternshipsActions>;

const thunkProfileInternships = (user: number, page: number = 1): IProfileInternshipsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileInternshipsActions>, getState) => {
		//start load internships
		dispatch(profileInternshipsStart());

		try{
			//get data for query
			const filtersFunc: (state: RootState) => any = getFormValues('profileInternshipsFilter'),
				filters = filtersFunc(getState()),
				sort = selectProfileInternshipsSort(getState()),
				{pageSize} = selectProfileInternshipsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//get data and set to store
			const resp = await profileApi.getInternships({filters, sort, page, pageSize, user});
			dispatch(profileInternshipsSuccess(resp.data));
			dispatch(profileInternshipsHours(resp.data.hours));
		}
		catch (e) {
			//show error
			dispatch(profileInternshipsError(e.message));
		}
	};
};

export default thunkProfileInternships;
