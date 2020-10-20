import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IProfilePublicationsActions} from './reducer';
import {
	profilePublicationsError,
	profilePublicationsStart,
	profilePublicationsSuccess
} from './actions';


export type IProfilePublicationsThunkAction =
	ThunkAction<void, RootState, unknown, IProfilePublicationsActions>;

const thunkProfilePublications = (offset: number = 1): IProfilePublicationsThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IProfilePublicationsActions>) => {
		dispatch(profilePublicationsStart());

		try{
			await new Promise((res) => {
				setTimeout(res, 2000);
			});

			dispatch(profilePublicationsSuccess([
				{id: 1, title: 'Test', url: '', date_of_publication: '20.03.2001', description: '', publisher: 'Publisher', authors: 'Author'},
				{id: 2, title: 'Test', url: '', date_of_publication: '20.03.2001', description: '', publisher: 'Publisher', authors: 'Author'}
			]));
		}
		catch (e) {
			dispatch(profilePublicationsError(e.message));
		}
	};
};

export default thunkProfilePublications;
