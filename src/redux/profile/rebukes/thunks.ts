import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IProfileRebukesActions} from './reducer';

import {
	profileRebukesError,
	profileRebukesStart,
	profileRebukesSuccess
} from './actions';
import {selectProfileRebukesPagination, selectProfileRebukesSort} from './selectors';
import profileApi from '../../../utils/api/profileApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IProfileRebukesThunkAction =
	ThunkAction<void, RootState, unknown, IProfileRebukesActions>;

const thunkProfileRebukes = (user: number, page = 1): IProfileRebukesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileRebukesActions>, getState) => {
		//start loading rebukes
		dispatch(profileRebukesStart());

		try{
			//get data for query
			const filtersFunc: (state: RootState) => any = getFormValues('profileRebukesFilter'),
				filters = filtersFunc(getState()),
				sort = selectProfileRebukesSort(getState()),
				{pageSize} = selectProfileRebukesPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//send data to store
			const resp = await profileApi.getRebukes({filters, sort, page, pageSize, user});
			dispatch(profileRebukesSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(profileRebukesError(e.message));
		}
	};
};

export default thunkProfileRebukes;
