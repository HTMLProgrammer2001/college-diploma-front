import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

import {RootState} from '../';
import {appInitializeStart, appInitializeSuccess} from './actions';
import thunkMe from '../me/thunks';


export type IAppThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkApp = (): IAppThunkAction => {
	return async (dispatch: any) => {
		dispatch(appInitializeStart());

		try{
			dispatch(thunkMe()).then((val: boolean) => {
				dispatch(appInitializeSuccess());
			});
		}
		catch (e) {
			console.log(e);
		}
	};
};

export default thunkApp;
