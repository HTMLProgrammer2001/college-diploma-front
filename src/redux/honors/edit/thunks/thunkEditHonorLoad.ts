import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditHonorActions} from '../reducer';
import {RootState} from '../../../';

import {editHonorLoadStart, editHonorLoadError, editHonorLoadSuccess} from '../actions';
import honorsApi from '../../../../utils/api/models/honorsApi';


export type IEditHonorLoadThunkAction = ThunkAction<void, RootState, unknown, IEditHonorActions>;

const thunkEditHonorLoad = (id: number): IEditHonorLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditHonorActions>) => {
		dispatch(editHonorLoadStart());

		try{
			const resp = await honorsApi.getHonor(id);
			dispatch(editHonorLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editHonorLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditHonorLoad;
