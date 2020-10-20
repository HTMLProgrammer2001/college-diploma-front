import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {IShowQualificationsActions} from './reducer';
import {
	qualificationsShowError,
	qualificationsShowStart,
	qualificationsShowSuccess
} from './actions';


export type IQualificationsShowThunkAction = ThunkAction<void, RootState, unknown, IShowQualificationsActions>;

const thunkQualificationsShow = (): IQualificationsShowThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IShowQualificationsActions>) => {
		dispatch(qualificationsShowStart());

		try{

		}
		catch (e) {
			dispatch(qualificationsShowError(e.message));
		}
	};
};

export default thunkQualificationsShow;
