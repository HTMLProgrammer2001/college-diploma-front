import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {publicationSingleError, publicationSingleStart, publicationSingleSuccess} from './actions';
import publicationsApi from '../../../utils/api/models/publicationsApi';


export type IPublicationSingleThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkSinglePublication = (id: number): IPublicationSingleThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(publicationSingleStart());

		try{
			const resp = await publicationsApi.getPublication(id);
			dispatch(publicationSingleSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(publicationSingleError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkSinglePublication;
