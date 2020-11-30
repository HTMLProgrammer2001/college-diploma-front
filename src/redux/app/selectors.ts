import {RootState} from '../';


export const selectAppState = (state: RootState) => state.app;
export const selectAppError = (state: RootState) => state.app.error;
