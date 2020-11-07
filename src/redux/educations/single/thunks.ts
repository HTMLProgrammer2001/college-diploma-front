import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {educationSingleError, educationSingleStart, educationSingleSuccess} from './actions';
import educationsApi from '../../../utils/api/models/educationsApi';


export type IEducationSingleThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkSingleEducation = (id: number): IEducationSingleThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(educationSingleStart());

		try{
			const resp = await educationsApi.getEducation(id);
			dispatch(educationSingleSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(educationSingleError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkSingleEducation;
