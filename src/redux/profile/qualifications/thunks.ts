import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

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


export type IProfileQualificationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileQualificationsActions>;

const thunkProfileQualifications = (user: number, page: number = 1): IProfileQualificationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileQualificationsActions>, getState) => {
		dispatch(profileQualificationsStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profileQualificationsFilter'),
				sort = selectProfileQualificationsSort(getState()),
				{pageSize} = selectProfileQualificationsPagination(getState());

			let resp = await profileApi.getQualifications({
				filters: filters(getState()), sort, page, pageSize, user
			});

			dispatch(profileQualificationsSuccess(resp.data));
			dispatch(profileQualificationsSetNext(resp.data.nextDate));
		}
		catch (e) {
			dispatch(profileQualificationsError(e.message));
		}
	};
};

export default thunkProfileQualifications;
