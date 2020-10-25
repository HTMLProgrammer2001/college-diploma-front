import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IProfileEducationsActions} from './reducer';

import {
	profileEducationsError,
	profileEducationsStart,
	profileEducationsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfileEducationsPagination, selectProfileEducationsSort} from './selectors';


export type IProfileEducationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileEducationsActions>;

const thunkProfileEducations = (page: number = 1): IProfileEducationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileEducationsActions>, getState) => {
		dispatch(profileEducationsStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profilePublicationsFilter'),
				sort = selectProfileEducationsSort(getState()),
				pagination = selectProfileEducationsPagination(getState());

			const resp = await profileApi.getEducations(filters(getState()), sort, page, pagination.pageSize);
			dispatch(profileEducationsSuccess(resp.data));
		}
		catch (e) {
			dispatch(profileEducationsError(e.message));
		}
	};
};

export default thunkProfileEducations;
