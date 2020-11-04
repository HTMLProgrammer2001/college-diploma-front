import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {IEditCategoryActions} from '../reducer';
import {RootState} from '../../../';

import {editCategoryLoadStart, editCategoryLoadError, editCategoryLoadSuccess} from '../actions';
import categoriesApi from '../../../../utils/api/models/categoriesApi';


export type IEditCategoryLoadThunkAction = ThunkAction<void, RootState, unknown, IEditCategoryActions>;

const thunkEditCategoryLoad = (id: number): IEditCategoryLoadThunkAction => {
	return async (dispatch: ThunkDispatch<{}, {}, IEditCategoryActions>) => {
		dispatch(editCategoryLoadStart());

		try{
			const resp = await categoriesApi.getCategory(id);
			dispatch(editCategoryLoadSuccess(resp.data.data));
		}
		catch (e) {
			dispatch(editCategoryLoadError(e.response?.data.message || e.message));
		}
	};
};

export default thunkEditCategoryLoad;
