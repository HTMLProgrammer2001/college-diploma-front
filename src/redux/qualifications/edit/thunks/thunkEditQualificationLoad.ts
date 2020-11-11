import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditQualificationActions} from '../reducer';
import {RootState} from '../../../';

import {editQualificationLoadStart, editQualificationLoadError, editQualificationLoadSuccess} from '../actions';
import qualificationsApi from '../../../../utils/api/models/qualificationsApi';


export type IEditQualificationLoadThunkAction = ThunkAction<void, RootState, unknown, IEditQualificationActions>;

const thunkEditQualificationLoad = (id: number): IEditQualificationLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditQualificationActions>) => {
		dispatch(editQualificationLoadStart());

		try{
			const resp = await qualificationsApi.getQualification(id);
			dispatch(editQualificationLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editQualificationLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditQualificationLoad;
