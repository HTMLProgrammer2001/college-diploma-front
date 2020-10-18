import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IShowPublicationsActions} from './reducer';
import {
	publicationsShowSuccess,
	publicationsShowError,
	publicationsShowStart
} from './actions';


export type IPublicationsShowThunkAction = ThunkAction<void, RootState, unknown, IShowPublicationsActions>;

const thunkPublicationsShow = (): IPublicationsShowThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IShowPublicationsActions>) => {
		dispatch(publicationsShowStart());

		try{

		}
		catch (e) {
			dispatch(publicationsShowError(e.message));
		}
	};
};

export default thunkPublicationsShow;
