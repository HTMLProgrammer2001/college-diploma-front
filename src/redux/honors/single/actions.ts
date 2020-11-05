import {
	HONOR_SINGLE_ERROR,
	HONOR_SINGLE_START,
	HONOR_SINGLE_SUCCESS
} from './types';
import {IHonor} from '../../../interfaces/models/IHonor';


export const honorSingleStart = () => <const>({
	type: HONOR_SINGLE_START
});

export const honorSingleError = (error: string) => <const>({
	type: HONOR_SINGLE_ERROR,
	error
});

export const honorSingleSuccess = (honor: IHonor) => <const>({
	type: HONOR_SINGLE_SUCCESS,
	payload: honor
});
