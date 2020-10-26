import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IProfileRebukesActions} from './reducer';

import {
	profileRebukesError,
	profileRebukesStart,
	profileRebukesSuccess
} from './actions';
import {selectProfileRebukesPagination, selectProfileRebukesSort} from './selectors';
import profileApi from '../../../utils/api/profileApi';


export type IProfileRebukesThunkAction =
	ThunkAction<void, RootState, unknown, IProfileRebukesActions>;

const thunkProfileRebukes = (page = 1): IProfileRebukesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileRebukesActions>, getState) => {
		dispatch(profileRebukesStart());

		try{
			const filters: (state: RootState) => any = getFormValues('profileRebukesFilter'),
				sort = selectProfileRebukesSort(getState()),
				pagination = selectProfileRebukesPagination(getState());

			const resp = await profileApi.getRebukes(filters(getState()), sort, page, pagination.pageSize);
			dispatch(profileRebukesSuccess(resp.data));
		}
		catch (e) {
			dispatch(profileRebukesError(e.message));
		}
	};
};

export default thunkProfileRebukes;
