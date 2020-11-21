import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import {IDeleteUserActions} from './reducer';

import {deleteUserError, deleteUserStart, deleteUserSuccess} from './actions';
import {allUsersDelete} from '../all/actions';
import usersApi from '../../../utils/api/models/usersApi';


type IActions = IDeleteUserActions | ReturnType<typeof allUsersDelete>;
export type IUserEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteUser = (id: number): IUserEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteUserStart(id));

		try{
			await usersApi.deleteUser(id);

			dispatch(deleteUserSuccess(id));
			dispatch(allUsersDelete(id));
			toast.success(i18next.t('messages.users.delete', {id}));
		}
		catch (e) {
			dispatch(deleteUserError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteUser;
