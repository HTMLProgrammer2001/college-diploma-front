import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IProfileQualificationsActions} from './reducer';
import {
	profileQualificationsError,
	profileQualificationsStart,
	profileQualificationsSuccess
} from './actions';


export type IProfileQualificationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileQualificationsActions>;

const thunkProfileQualifications = (offset: number = 1): IProfileQualificationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileQualificationsActions>) => {
		dispatch(profileQualificationsStart());

		try{
			await new Promise((res) => {
				setTimeout(res, 2000);
			});

			dispatch(profileQualificationsSuccess([{id: 1, name: 'Test', date: '20.10.2020', user: 'Yura'}]));
		}
		catch (e) {
			dispatch(profileQualificationsError(e.message));
		}
	};
};

export default thunkProfileQualifications;
