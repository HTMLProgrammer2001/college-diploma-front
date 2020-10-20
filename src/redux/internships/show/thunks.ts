import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IShowInternshipsActions} from './reducer';
import {
	internshipsShowError,
	internshipsShowStart,
	internshipsShowSuccess
} from './actions';


export type IPublicationsShowThunkAction = ThunkAction<void, RootState, unknown, IShowInternshipsActions>;

const thunkInternshipsShow = (): IPublicationsShowThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IShowInternshipsActions>) => {
		dispatch(internshipsShowStart());

		try{

		}
		catch (e) {
			dispatch(internshipsShowError(e.message));
		}
	};
};

export default thunkInternshipsShow;
