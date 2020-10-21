import {
	PROFILE_INTERNSHIPS_CHANGE_SORT,
	PROFILE_INTERNSHIPS_ERROR,
	PROFILE_INTERNSHIPS_START,
	PROFILE_INTERNSHIPS_SUCCESS
} from './types';
import {IInternship} from '../../../interfaces/models/IInternship';


export const profileInternshipsStart = () => <const>({
	type: PROFILE_INTERNSHIPS_START
});

export const profileInternshipsError = (error: string) => <const>({
	type: PROFILE_INTERNSHIPS_ERROR,
	error
});

export const profileInternshipsSuccess = (internships: IInternship[]) => <const>({
	type: PROFILE_INTERNSHIPS_SUCCESS,
	payload: internships
});

export const profileInternshipsChangeSort = (field: string) => <const>({
	type: PROFILE_INTERNSHIPS_CHANGE_SORT,
	payload: field
});
