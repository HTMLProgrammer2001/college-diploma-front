import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';
import i18n from 'i18next';

import {RootState} from '../../index';
import categoriesApi from '../../../utils/api/models/categoriesApi';
import {ICategoriesAddData} from '../../../pages/Categories/add/AddCategoryForm';


export type IAddCategoryThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddCategory = (vals: ICategoriesAddData): IAddCategoryThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		//start
		dispatch(startSubmit('categoriesAddForm'));

		try{
			//make api call
			await categoriesApi.addCategory(vals);

			//change form
			dispatch(stopSubmit('categoriesAddForm'));
			dispatch(reset('categoriesAddForm'));

			//show message
			toast.success(i18n.t('messages.categories.add'));
		}
		catch (e) {
			//set error
			dispatch(stopSubmit('categoriesAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			//show error
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddCategory;
