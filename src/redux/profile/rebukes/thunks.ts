import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IProfileRebukesActions} from './reducer';
import {
	profileRebukesError,
	profileRebukesStart,
	profileRebukesSuccess
} from './actions';


export type IProfileRebukesThunkAction =
	ThunkAction<void, RootState, unknown, IProfileRebukesActions>;

const thunkProfileRebukes = (offset: number = 1): IProfileRebukesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileRebukesActions>) => {
		dispatch(profileRebukesStart());

		try{
			await new Promise((res) => {
				setTimeout(res, 2000);
			});

			dispatch(profileRebukesSuccess([
				{id: 10, active: true, date_presentation: '20.03.2020', order: '123434', title: 'Test', user: {fullName: 'Name', id: 1}},
				{id: 11, active: true, date_presentation: '31.12.2018', order: '234324', title: 'Title', user: {fullName: 'User', id: 1}}
			]));
		}
		catch (e) {
			dispatch(profileRebukesError(e.message));
		}
	};
};

export default thunkProfileRebukes;
