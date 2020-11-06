import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteRebukeActions} from './reducer';

import {deleteRebukeError, deleteRebukeStart, deleteRebukeSuccess} from './actions';
import {allRebukesDelete} from '../all/actions';
import rebukesApi from '../../../utils/api/models/rebukesApi';


type IActions = IDeleteRebukeActions | ReturnType<typeof allRebukesDelete>;
export type IRebukeEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteRebuke = (id: number): IRebukeEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteRebukeStart(id));

		try{
			await rebukesApi.deleteRebuke(id);

			dispatch(deleteRebukeSuccess(id));
			dispatch(allRebukesDelete(id));
			toast.success(`Выговор с id ${id} удален`);
		}
		catch (e) {
			dispatch(deleteRebukeError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteRebuke;
