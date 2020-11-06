import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditRebukeActions} from '../reducer';
import {RootState} from '../../../';

import {editRebukeLoadStart, editRebukeLoadError, editRebukeLoadSuccess} from '../actions';
import rebukesApi from '../../../../utils/api/models/rebukesApi';


export type IEditRebukeLoadThunkAction = ThunkAction<void, RootState, unknown, IEditRebukeActions>;

const thunkEditRebukeLoad = (id: number): IEditRebukeLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditRebukeActions>) => {
		dispatch(editRebukeLoadStart());

		try{
			const resp = await rebukesApi.getRebuke(id);
			dispatch(editRebukeLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editRebukeLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditRebukeLoad;
