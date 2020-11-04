import {
	EDIT_CATEGORY_LOAD_ERROR,
	EDIT_CATEGORY_LOAD_START,
	EDIT_CATEGORY_LOAD_SUCCESS
} from './types';

import {ICategory} from '../../../interfaces/models/ICategory';


export const editCategoryLoadStart = () => <const>({
	type: EDIT_CATEGORY_LOAD_START
});

export const editCategoryLoadError = (error: string) => <const>({
	type: EDIT_CATEGORY_LOAD_ERROR,
	error
});

export const editCategoryLoadSuccess = (commission: ICategory) => <const>({
	type: EDIT_CATEGORY_LOAD_SUCCESS,
	payload: commission
});
