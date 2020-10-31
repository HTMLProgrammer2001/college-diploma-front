import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditRankActions} from '../reducer';
import {RootState} from '../../../';

import {editRankLoadStart, editRankLoadError, editRankLoadSuccess} from '../actions';
import ranksApi from '../../../../utils/api/models/ranksApi';


export type IEditRankLoadThunkAction = ThunkAction<void, RootState, unknown, IEditRankActions>;

const thunkEditRankLoad = (id: number): IEditRankLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditRankActions>) => {
		dispatch(editRankLoadStart());

		try{
			const resp = await ranksApi.getRank(id);
			dispatch(editRankLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editRankLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditRankLoad;
