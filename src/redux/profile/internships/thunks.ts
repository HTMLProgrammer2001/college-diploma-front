import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IProfileInternshipsActions} from './reducer';
import {
	profileInternshipsError,
	profileInternshipsStart,
	profileInternshipsSuccess
} from './actions';


export type IProfileInternshipsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileInternshipsActions>;

const thunkProfileInternships = (offset: number = 1): IProfileInternshipsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileInternshipsActions>) => {
		dispatch(profileInternshipsStart());

		try{
			await new Promise((res) => {
				setTimeout(res, 2000);
			});

			dispatch(profileInternshipsSuccess([]));
		}
		catch (e) {
			dispatch(profileInternshipsError(e.message));
		}
	};
};

export default thunkProfileInternships;
