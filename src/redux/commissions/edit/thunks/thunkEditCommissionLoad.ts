import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditCommissionActions} from '../reducer';
import {RootState} from '../../../';

import {editCommissionLoadStart, editCommissionLoadError, editCommissionLoadSuccess} from '../actions';
import commissionsApi from '../../../../utils/api/models/commissionsApi';


export type IEditCommissionLoadThunkAction = ThunkAction<void, RootState, unknown, IEditCommissionActions>;

const thunkEditCommissionLoad = (id: number): IEditCommissionLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditCommissionActions>) => {
		dispatch(editCommissionLoadStart());

		try{
			const resp = await commissionsApi.getCommission(id);
			dispatch(editCommissionLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editCommissionLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditCommissionLoad;
