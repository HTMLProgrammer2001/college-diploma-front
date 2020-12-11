import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';
import i18next from 'i18next';

import {RootState} from '../../index';
import {IDeleteCategoryActions} from './reducer';

import {deleteCategoryError, deleteCategoryStart, deleteCategorySuccess} from './actions';
import {allCategoriesDelete} from '../all/actions';
import categoriesApi from '../../../utils/api/models/categoriesApi';


type IActions = IDeleteCategoryActions | ReturnType<typeof allCategoriesDelete>;
export type ICategoryEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteCategory = (id: number): ICategoryEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		//start loading
		dispatch(deleteCategoryStart(id));

		try{
			await categoriesApi.deleteCategory(id);

			//success dispatch and delete from categories list
			dispatch(deleteCategorySuccess(id));
			dispatch(allCategoriesDelete(id));
			toast.success(i18next.t('messages.categories.delete', {id}));
		}
		catch (e) {
			//show error
			dispatch(deleteCategoryError(id, e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};
};

export default thunkDeleteCategory;
