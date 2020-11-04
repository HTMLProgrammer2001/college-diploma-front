import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import publicationsApi from '../../../utils/api/models/publicationsApi';
import {IPublicationsImportData} from '../../../pages/Publications/import/ImportPublicationsForm';


export type IImportPublicationThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkImportPublication = (vals: IPublicationsImportData): IImportPublicationThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('importPublicationsForm'));

		try{
			await publicationsApi.importPublications(vals);
			dispatch(stopSubmit('importPublicationsForm'));
			dispatch(reset('importPublicationsForm'));

			toast.success('Публикации импортированы');
		}
		catch (e) {
			dispatch(stopSubmit('importPublicationsForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkImportPublication;
