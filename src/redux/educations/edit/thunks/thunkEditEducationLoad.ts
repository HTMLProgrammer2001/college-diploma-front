import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditEducationActions} from '../reducer';
import {RootState} from '../../../';

import {editEducationLoadStart, editEducationLoadError, editEducationLoadSuccess} from '../actions';
import educationsApi from '../../../../utils/api/models/educationsApi';


export type IEditEducationLoadThunkAction = ThunkAction<void, RootState, unknown, IEditEducationActions>;

const thunkEditEducationLoad = (id: number): IEditEducationLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditEducationActions>) => {
		dispatch(editEducationLoadStart());

		try{
			const resp = await educationsApi.getEducation(id);
			dispatch(editEducationLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editEducationLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditEducationLoad;
