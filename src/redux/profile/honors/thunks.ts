import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IProfileHonorsActions} from './reducer';
import {
	profileHonorsError,
	profileHonorsStart,
	profileHonorsSuccess
} from './actions';


export type IProfileHonorsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileHonorsActions>;

const thunkProfileHonors = (offset: number = 1): IProfileHonorsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileHonorsActions>) => {
		dispatch(profileHonorsStart());

		try{
			await new Promise((res) => {
				setTimeout(res, 2000);
			});

			dispatch(profileHonorsSuccess([{id: 10, active: true, date_presentation: '20.03.2020', order: '123434', title: 'Test', type: 'Type', user: {fullName: 'Name', id: 1}}]));
		}
		catch (e) {
			dispatch(profileHonorsError(e.message));
		}
	};
};

export default thunkProfileHonors;
