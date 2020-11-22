import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';
import {replace} from 'connected-react-router';

import {RootState} from '../../';
import {IProfileHonorsActions} from './reducer';

import {
	profileHonorsError,
	profileHonorsStart,
	profileHonorsSuccess
} from './actions';
import {selectProfileHonorsPagination, selectProfileHonorsSort} from './selectors';
import profileApi from '../../../utils/api/profileApi';
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IProfileHonorsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileHonorsActions>;

const thunkProfileHonors = (user: number, page = 1): IProfileHonorsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileHonorsActions>, getState) => {
		//start loading
		dispatch(profileHonorsStart());

		try{
			//get data for query
			const filterFunc: (state: RootState) => any = getFormValues('profileHonorsFilter'),
				filters = filterFunc(getState()),
				sort = selectProfileHonorsSort(getState()),
				{pageSize} = selectProfileHonorsPagination(getState());
			
			//change URL
			let newValues = Object.assign(filters, page && page != 1 ? {page} : {});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//set new honors
			const resp = await profileApi.getHonors({filters: filters, user, sort, page, pageSize});
			dispatch(profileHonorsSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(profileHonorsError(e.message));
		}
	};
};

export default thunkProfileHonors;
