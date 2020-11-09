import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditInternshipActions} from '../reducer';
import {RootState} from '../../../';

import {editInternshipLoadStart, editInternshipLoadError, editInternshipLoadSuccess} from '../actions';
import internshipsApi from '../../../../utils/api/models/internshipsApi';


export type IEditInternshipLoadThunkAction = ThunkAction<void, RootState, unknown, IEditInternshipActions>;

const thunkEditInternshipLoad = (id: number): IEditInternshipLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditInternshipActions>) => {
		dispatch(editInternshipLoadStart());

		try{
			const resp = await internshipsApi.getInternship(id);
			dispatch(editInternshipLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editInternshipLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditInternshipLoad;
