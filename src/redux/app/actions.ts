import {
	APP_INITIALIZE_START,
	APP_INITIALIZE_SUCCESS
} from './types';


export const appInitializeStart = () => <const>({
	type: APP_INITIALIZE_START
});

export const appInitializeSuccess = () => <const>({
	type: APP_INITIALIZE_SUCCESS
});
