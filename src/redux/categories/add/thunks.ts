import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import categoriesApi from '../../../utils/api/models/categoriesApi';


export type IAddCategoryThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkAddCategory = (vals: any): IAddCategoryThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, Action<any>>) => {
		dispatch(startSubmit('categoriesAddForm'));

		try{
			await categoriesApi.addCategory(vals);
			dispatch(stopSubmit('categoriesAddForm'));
			dispatch(reset('categoriesAddForm'));

			toast.success('Категория стажировок создана');
		}
		catch (e) {
			dispatch(stopSubmit('categoriesAddForm', {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkAddCategory;
