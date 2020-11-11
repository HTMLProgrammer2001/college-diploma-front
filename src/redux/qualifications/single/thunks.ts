import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {qualificationSingleError, qualificationSingleStart, qualificationSingleSuccess} from './actions';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';


export type IQualificationSingleThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkSingleQualification = (id: number): IQualificationSingleThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(qualificationSingleStart());

		try{
			const resp = await qualificationsApi.getQualification(id);
			dispatch(qualificationSingleSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(qualificationSingleError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkSingleQualification;
