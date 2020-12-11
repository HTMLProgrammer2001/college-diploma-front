import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../../index';
import {ICategoriesEditData} from '../../../../pages/Categories/edit/EditCategoryForm';
import categoriesApi from '../../../../utils/api/models/categoriesApi';


export type ICategoryEditThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkEditCategory = (id: number, vals: ICategoriesEditData): ICategoryEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		//start loading
		dispatch(startSubmit('categoriesEditForm'));

		try{
			//api call
			await categoriesApi.editCategory(id, vals);

			//success
			dispatch(stopSubmit('categoriesEditForm'));
			toast.success(i18next.t('messages.categories.edit'));
		}
		catch (e) {
			//show error
			dispatch(stopSubmit('categoriesEditForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkEditCategory;
