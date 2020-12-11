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
import {replace} from "connected-react-router";
import getNewUrl from '../../../utils/helpers/getNewUrl';


export type IAllCategoriesThunkAction = ThunkAction<void, RootState, unknown, IAllCategoriesActions>;

const thunkAllCategories = (page: number = 1): IAllCategoriesThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IAllCategoriesActions>, getState) => {
		//start loading
		dispatch(allCategoriesStart());

		try{
			//get data for query
			const form = getFormValues('categoriesFilterForm'),
				filters = form(getState()) || {},
				sort = selectAllCategoriesSort(getState()),
				pagination = selectAllCategoriesPagination(getState());

			//change URL
			let newValues = Object.assign(filters, {page});
			dispatch(replace(getNewUrl(getState().router.location, newValues)));

			//set data to store
			const resp = await categoriesApi.getCategories(filters, sort, page, pagination.pageSize);
			dispatch(allCategoriesSuccess(resp.data));
		}
		catch (e) {
			//show error
			dispatch(allCategoriesError(e.message));
		}
	};
};

export default thunkAllCategories;
