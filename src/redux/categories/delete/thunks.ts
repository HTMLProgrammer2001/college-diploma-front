import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {IDeleteCategoryActions} from './reducer';

import {deleteCategoryError, deleteCategoryStart, deleteCategorySuccess} from './actions';
import {allCategoriesDelete} from '../all/actions';
import categoriesApi from '../../../utils/api/models/categoriesApi';


type IActions = IDeleteCategoryActions | ReturnType<typeof allCategoriesDelete>;
export type ICategoryEditThunkAction = ThunkAction<void, RootState, unknown, IActions>;

const thunkDeleteCategory = (id: number): ICategoryEditThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IActions>) => {
		dispatch(deleteCategoryStart(id));

		try{
			await categoriesApi.deleteCategory(id);

			dispatch(deleteCategorySuccess(id));
			dispatch(allCategoriesDelete(id));
			toast.success(`Категория стажировок с id ${id} удалена`);
		}
		catch (e) {
			dispatch(deleteCategoryError(id, e.response?.data.message || e.message));
			toast.error(`Ошибка: ${e.response?.data.message || e.message}`);
		}
	};
};

export default thunkDeleteCategory;
