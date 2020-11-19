import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../index';
import {IProfileInternshipsActions} from './reducer';
import {
	profileInternshipsError, profileInternshipsHours,
	profileInternshipsStart,
	profileInternshipsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfileInternshipsPagination, selectProfileInternshipsSort} from './selectors';


export type IProfileInternshipsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileInternshipsActions>;

const thunkProfileInternships = (user: number, page: number = 1): IProfileInternshipsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileInternshipsActions>, getState) => {
		dispatch(profileInternshipsStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profileInternshipsFilter'),
				sort = selectProfileInternshipsSort(getState()),
				{pageSize} = selectProfileInternshipsPagination(getState());

			const resp = await profileApi.getInternships({filters: filters(getState()), sort, page, pageSize, user});
			dispatch(profileInternshipsSuccess(resp.data));
			dispatch(profileInternshipsHours(resp.data.hours));
		}
		catch (e) {
			dispatch(profileInternshipsError(e.message));
		}
	};
};

export default thunkProfileInternships;
