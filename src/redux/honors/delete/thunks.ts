import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import {IDeleteHonorActions} from './reducer';

import {deleteHonorError, deleteHonorStart, deleteHonorSuccess} from './actions';
import {allHonorsDelete} from '../all/actions';
import honorsApi from '../../../utils/api/models/honorsApi';


type IActions = IDeleteHonorActions | ReturnType<typeof allHonorsDelete>;
export type IHonorEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteHonor = (id: number): IHonorEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteHonorStart(id));

		try{
			await honorsApi.deleteHonor(id);

			dispatch(deleteHonorSuccess(id));
			dispatch(allHonorsDelete(id));
			toast.success(i18next.t('messages.honors.delete', {id}));
		}
		catch (e) {
			dispatch(deleteHonorError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteHonor;
