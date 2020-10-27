import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IProfileInternshipsActions} from './reducer';
import {
	profileInternshipsError,
	profileInternshipsStart,
	profileInternshipsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfileInternshipsPagination, selectProfileInternshipsSort} from './selectors';


export type IProfileInternshipsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileInternshipsActions>;

const thunkProfileInternships = (page: number = 1): IProfileInternshipsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileInternshipsActions>, getState) => {
		dispatch(profileInternshipsStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profileInternshipsFilter'),
				sort = selectProfileInternshipsSort(getState()),
				pagination = selectProfileInternshipsPagination(getState());

			const resp = await profileApi.getInternships(filters(getState()), sort, page, pagination.pageSize);
			dispatch(profileInternshipsSuccess(resp.data));
		}
		catch (e) {
			dispatch(profileInternshipsError(e.message));
		}
	};
};

export default thunkProfileInternships;
