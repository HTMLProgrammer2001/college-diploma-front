import {
	DELETE_CATEGORY_ERROR,
	DELETE_CATEGORY_START,
	DELETE_CATEGORY_SUCCESS
} from './types';


export const deleteCategoryStart = (id: number) => <const>({
	type: DELETE_CATEGORY_START,
	payload: id
});

export const deleteCategoryError = (id: number, error: string) => <const>({
	type: DELETE_CATEGORY_ERROR,
	error,
	payload: id
});

export const deleteCategorySuccess = (id: number) => <const>({
	type: DELETE_CATEGORY_SUCCESS,
	payload: id
});
