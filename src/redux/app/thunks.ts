import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';

import {RootState} from '../';
import {appInitializeStart, appInitializeSuccess} from './actions';
import thunkMe from '../me/thunks';


export type IAppThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkApp = (): IAppThunkAction => {
	return async (dispatch: any) => {
		//start initializing
		dispatch(appInitializeStart());

		try{
			//get me info
			await dispatch(thunkMe());

			//initialize app
			dispatch(appInitializeSuccess());
		}
		catch (e) {
			//on error log
			console.log(e);
		}
	};
};

export default thunkApp;
