import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IProfilePublicationsActions} from './reducer';
import {
	profilePublicationsError,
	profilePublicationsStart,
	profilePublicationsSuccess
} from './actions';
import profileApi from '../../../utils/api/profileApi';
import {selectProfilePublicationsPagination, selectProfilePublicationsSort} from './selectors';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IProfilePublicationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfilePublicationsActions>;

const thunkProfilePublications = (user: number, page: number = 1): IProfilePublicationsThunkAction => {

	return async (dispatch: ThunkDispatch<RootState, {}, IProfilePublicationsActions>, getState) => {
		//start loading publications
		dispatch(profilePublicationsStart());

		try{
			//get data for query
			const filtersFunc: (state: RootState) => any = getFormValues('profilePublicationsFilter'),
				filters = filtersFunc(getState()),
				sort = selectProfilePublicationsSort(getState()),
				{pageSize} = selectProfilePublicationsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, page && page != 1 ? {page} : {});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//set data to store
			let resp = await profileApi.getPublications({filters, sort, page, pageSize, user});
			dispatch(profilePublicationsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(profilePublicationsError(e.message));
		}
	};
};

export default thunkProfilePublications;
