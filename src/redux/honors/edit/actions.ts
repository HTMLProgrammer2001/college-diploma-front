import {
	EDIT_HONOR_LOAD_ERROR,
	EDIT_HONOR_LOAD_START,
	EDIT_HONOR_LOAD_SUCCESS
} from './types';

import {IHonor} from '../../../interfaces/models/IHonor';


export const editHonorLoadStart = () => <const>({
	type: EDIT_HONOR_LOAD_START
});

export const editHonorLoadError = (error: string) => <const>({
	type: EDIT_HONOR_LOAD_ERROR,
	error
});

export const editHonorLoadSuccess = (publication: IHonor) => <const>({
	type: EDIT_HONOR_LOAD_SUCCESS,
	payload: publication
});
