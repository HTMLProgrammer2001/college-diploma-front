import {RootState} from '../../index';


export const selectEditCategoryState = (state: RootState) => state.categories.edit;
export const selectEditCategory = (state: RootState) => selectEditCategoryState(state).category;
