import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllPublicationsActions} from './reducer';

import {
	allPublicationsError,
	allPublicationsStart,
	allPublicationsSuccess
} from './actions';
import {selectAllPublicationsPagination, selectAllPublicationsSort} from './selectors';
import publicationsApi from '../../../utils/api/models/publicationsApi';
import {replace} from "connected-react-router";
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllPublicationsThunkAction = ThunkAction<void, RootState, unknown, IAllPublicationsActions>;

const thunkAllPublications = (page: number = 1): IAllPublicationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllPublicationsActions>, getState) => {
		//start loading publications
		dispatch(allPublicationsStart());

		try{
			//get data for query
			const form = getFormValues('publicationsFilterForm'),
				filters = form(getState()),
				sort = selectAllPublicationsSort(getState()),
				pagination = selectAllPublicationsPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await publicationsApi.getPublications(filters, sort, page, pagination.pageSize);
			dispatch(allPublicationsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allPublicationsError(e.message));
		}
	};
};

export default thunkAllPublications;
