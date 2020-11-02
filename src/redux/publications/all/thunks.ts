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


export type IAllPublicationsThunkAction = ThunkAction<void, RootState, unknown, IAllPublicationsActions>;

const thunkAllPublications = (page: number = 1): IAllPublicationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllPublicationsActions>, getState) => {
		dispatch(allPublicationsStart());

		try{
			const form = getFormValues('publicationsFilterForm'),
				sort = selectAllPublicationsSort(getState()),
				pagination = selectAllPublicationsPagination(getState());

			const resp = await publicationsApi.getPublications(form(getState()), sort, page, pagination.pageSize);
			dispatch(allPublicationsSuccess(resp.data));
		}
		catch (e) {
			dispatch(allPublicationsError(e.message));
		}
	};
};

export default thunkAllPublications;
