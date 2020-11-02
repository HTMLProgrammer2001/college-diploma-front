import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditPublicationActions} from '../reducer';
import {RootState} from '../../../';

import {editPublicationLoadStart, editPublicationLoadError, editPublicationLoadSuccess} from '../actions';
import publicationsApi from '../../../../utils/api/models/publicationsApi';


export type IEditPublicationLoadThunkAction = ThunkAction<void, RootState, unknown, IEditPublicationActions>;

const thunkEditPublicationLoad = (id: number): IEditPublicationLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditPublicationActions>) => {
		dispatch(editPublicationLoadStart());

		try{
			const resp = await publicationsApi.getPublication(id);
			dispatch(editPublicationLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editPublicationLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditPublicationLoad;
