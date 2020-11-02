import {
	EDIT_PUBLICATION_LOAD_ERROR,
	EDIT_PUBLICATION_LOAD_START,
	EDIT_PUBLICATION_LOAD_SUCCESS
} from './types';

import {IPublication} from '../../../interfaces/models/IPublication';


export const editPublicationLoadStart = () => <const>({
	type: EDIT_PUBLICATION_LOAD_START
});

export const editPublicationLoadError = (error: string) => <const>({
	type: EDIT_PUBLICATION_LOAD_ERROR,
	error
});

export const editPublicationLoadSuccess = (publication: IPublication) => <const>({
	type: EDIT_PUBLICATION_LOAD_SUCCESS,
	payload: publication
});
