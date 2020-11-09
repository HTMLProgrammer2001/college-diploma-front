import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {internshipSingleError, internshipSingleStart, internshipSingleSuccess} from './actions';
import internshipsApi from '../../../utils/api/models/internshipsApi';


export type IInternshipSingleThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkSingleInternship = (id: number): IInternshipSingleThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(internshipSingleStart());

		try{
			const resp = await internshipsApi.getInternship(id);
			dispatch(internshipSingleSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(internshipSingleError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkSingleInternship;
