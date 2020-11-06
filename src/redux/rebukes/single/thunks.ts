import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {rebukeSingleError, rebukeSingleStart, rebukeSingleSuccess} from './actions';
import rebukesApi from '../../../utils/api/models/rebukesApi';


export type IRebukeSingleThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkSingleRebuke = (id: number): IRebukeSingleThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(rebukeSingleStart());

		try{
			const resp = await rebukesApi.getRebuke(id);
			dispatch(rebukeSingleSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(rebukeSingleError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkSingleRebuke;
