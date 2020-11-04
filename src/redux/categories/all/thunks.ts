import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../../';
import {IAllCategoriesActions} from './reducer';

import {
	allCategoriesError,
	allCategoriesStart,
	allCategoriesSuccess
} from './actions';
import {selectAllCategoriesPagination, selectAllCategoriesSort} from './selectors';
import categoriesApi from '../../../utils/api/models/categoriesApi';


export type IAllCategoriesThunkAction = ThunkAction<void, RootState, unknown, IAllCategoriesActions>;

const thunkAllCategories = (page: number = 1): IAllCategoriesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllCategoriesActions>, getState) => {
		dispatch(allCategoriesStart());

		try{
			const form = getFormValues('categoriesFilterForm'),
				sort = selectAllCategoriesSort(getState()),
				pagination = selectAllCategoriesPagination(getState());

			const resp = await categoriesApi.getCategories(form(getState()), sort, page, pagination.pageSize);
			dispatch(allCategoriesSuccess(resp.data));
		}
		catch (e) {
			dispatch(allCategoriesError(e.message));
		}
	};
};

export default thunkAllCategories;
