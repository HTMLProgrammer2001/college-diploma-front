import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeletePublicationActions} from './reducer';

import {deletePublicationError, deletePublicationStart, deletePublicationSuccess} from './actions';
import {allPublicationsDelete} from '../all/actions';
import publicationsApi from '../../../utils/api/models/publicationsApi';


type IActions = IDeletePublicationActions | ReturnType<typeof allPublicationsDelete>;
export type IPublicationEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeletePublication = (id: number): IPublicationEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deletePublicationStart(id));

		try{
			await publicationsApi.deletePublication(id);

			dispatch(deletePublicationSuccess(id));
			dispatch(allPublicationsDelete(id));
			toast.success(`Публикации с id ${id} удалено`);
		}
		catch (e) {
			dispatch(deletePublicationError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeletePublication;
