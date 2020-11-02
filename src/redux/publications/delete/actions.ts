import {
	DELETE_PUBLICATION_ERROR,
	DELETE_PUBLICATION_START,
	DELETE_PUBLICATION_SUCCESS
} from './types';


export const deletePublicationStart = (id: number) => <const>({
	type: DELETE_PUBLICATION_START,
	payload: id
});

export const deletePublicationError = (id: number, error: string) => <const>({
	type: DELETE_PUBLICATION_ERROR,
	error,
	payload: id
});

export const deletePublicationSuccess = (id: number) => <const>({
	type: DELETE_PUBLICATION_SUCCESS,
	payload: id
});
