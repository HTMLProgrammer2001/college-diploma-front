import {
	PUBLICATION_SINGLE_ERROR,
	PUBLICATION_SINGLE_START,
	PUBLICATION_SINGLE_SUCCESS
} from './types';
import {IPublication} from '../../../interfaces/models/IPublication';


export const publicationSingleStart = () => <const>({
	type: PUBLICATION_SINGLE_START
});

export const publicationSingleError = (error: string) => <const>({
	type: PUBLICATION_SINGLE_ERROR,
	error
});

export const publicationSingleSuccess = (publication: IPublication) => <const>({
	type: PUBLICATION_SINGLE_SUCCESS,
	payload: publication
});
