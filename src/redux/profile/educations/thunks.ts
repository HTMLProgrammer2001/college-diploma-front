import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IProfileEducationsActions} from './reducer';
import {
	profileEducationsError,
	profileEducationsStart,
	profileEducationsSuccess
} from './actions';


export type IProfileEducationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfileEducationsActions>;

const thunkProfileEducations = (offset: number = 1): IProfileEducationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfileEducationsActions>) => {
		dispatch(profileEducationsStart());

		try{
			await new Promise((res) => {
				setTimeout(res, 2000);
			});

			dispatch(profileEducationsSuccess([
				{id: 1, institution: 'Insitute 1', graduate_year: 2010, qualification: 'Bakalavr', user: {fullName: 'Yura', id: 1}},
				{id: 2, institution: 'Insitute 2', graduate_year: 2015, qualification: 'Magistr', user: {fullName: 'Test', id: 1}}
			]));
		}
		catch (e) {
			dispatch(profileEducationsError(e.message));
		}
	};
};

export default thunkProfileEducations;
