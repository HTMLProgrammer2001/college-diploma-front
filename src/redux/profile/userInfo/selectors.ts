import {RootState} from '../../index';


export const selectProfileUserState = (state: RootState) => state.profile.user;
export const selectProfileUser = (state: RootState) => selectProfileUserState(state).user;
