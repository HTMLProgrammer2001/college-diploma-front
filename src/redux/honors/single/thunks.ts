import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {honorSingleError, honorSingleStart, honorSingleSuccess} from './actions';
import honorsApi from '../../../utils/api/models/honorsApi';


export type IHonorSingleThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkSingleHonor = (id: number): IHonorSingleThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(honorSingleStart());

		try{
			const resp = await honorsApi.getHonor(id);
			dispatch(honorSingleSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(honorSingleError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkSingleHonor;
