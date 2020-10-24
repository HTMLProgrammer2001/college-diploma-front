import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IProfilePublicationsActions} from './reducer';
import {
	profilePublicationsError,
	profilePublicationsStart,
	profilePublicationsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfilePublicationsPagination, selectProfilePublicationsSort} from './selectors';


export type IProfilePublicationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfilePublicationsActions>;

const thunkProfilePublications = (page: number = 1): IProfilePublicationsThunkAction => {

	return async (dispatch: ThunkDispatch<RootState, {}, IProfilePublicationsActions>, getState) => {
		dispatch(profilePublicationsStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profilePublicationsFilter'),
				sort = selectProfilePublicationsSort(getState()),
				pagination = selectProfilePublicationsPagination(getState());

			let resp = await profileApi.getPublications(filters(getState()), sort, page, pagination.pageSize);
			dispatch(profilePublicationsSuccess(resp.data));
		}
		catch (e) {
			dispatch(profilePublicationsError(e.message));
		}
	};
};

export default thunkProfilePublications;
