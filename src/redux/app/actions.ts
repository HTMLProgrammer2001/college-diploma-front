import {
	APP_INITIALIZE_START,
	APP_INITIALIZE_SUCCESS,
	APP_SET_ERROR,
	APP_RESET_ERROR
} from './types';


export const appInitializeStart = () => <const>({
	type: APP_INITIALIZE_START
});

export const appInitializeSuccess = () => <const>({
	type: APP_INITIALIZE_SUCCESS
});

export const appSetError = (code: number, msg?: string) => <const>({
	type: APP_SET_ERROR,
	payload: {code, msg}
});

export const appResetError = () => <const>({
	type: APP_RESET_ERROR
});
