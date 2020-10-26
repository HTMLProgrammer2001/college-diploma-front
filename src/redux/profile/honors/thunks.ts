import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IProfileHonorsActions} from './reducer';

import {
	profileHonorsError,
	profileHonorsStart,
	profileHonorsSuccess
} from './actions';
import {selectProfileHonorsPagination, selectProfileHonorsSort} from './selectors';
import profileApi from '../../../utils/api/profileApi';


export type IProfileHonorsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileHonorsActions>;

const thunkProfileHonors = (page = 1): IProfileHonorsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileHonorsActions>, getState) => {
		dispatch(profileHonorsStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profileHonorsFilter'),
				sort = selectProfileHonorsSort(getState()),
				pagination = selectProfileHonorsPagination(getState());

			const resp = await profileApi.getHonors(filters(getState()), sort, page, pagination.pageSize);
			dispatch(profileHonorsSuccess(resp.data));
		}
		catch (e) {
			dispatch(profileHonorsError(e.message));
		}
	};
};

export default thunkProfileHonors;
