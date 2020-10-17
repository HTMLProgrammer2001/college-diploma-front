import {RootState} from '../index';

export const selectMeState = (state: RootState) => state.me;
export const selectMeInfo = (state: RootState) => state.me.user;
