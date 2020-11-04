import {
	ALL_CATEGORIES_CHANGE_SORT,
	ALL_CATEGORIES_ERROR,
	ALL_CATEGORIES_START,
	ALL_CATEGORIES_SUCCESS,
	ALL_CATEGORIES_DELETE
} from './types';

import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {ICategory} from '../../../interfaces/models/ICategory';


type IResponse = IGeneralPaginationResponse<ICategory>;

export const allCategoriesStart = () => <const>({
	type: ALL_CATEGORIES_START
});

export const allCategoriesError = (error: string) => <const>({
	type: ALL_CATEGORIES_ERROR,
	error
});

export const allCategoriesSuccess = (commissionsResponse: IResponse) => <const>({
	type: ALL_CATEGORIES_SUCCESS,
	payload: commissionsResponse
});

export const allCategoriesChangeSort = (field: string) => <const>({
	type: ALL_CATEGORIES_CHANGE_SORT,
	payload: field
});

export const allCategoriesDelete = (id: number) => <const>({
	type: ALL_CATEGORIES_DELETE,
	payload: id
});
