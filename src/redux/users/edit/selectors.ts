import {RootState} from '../../index';


export const selectEditUserState = (state: RootState) => state.users.edit;
export const selectEditUser = (state: RootState) => selectEditUserState(state).user;
