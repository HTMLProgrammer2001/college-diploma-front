import {RootState} from '../../';


export const selectUserModalState = (state: RootState) => state.users.modal;
export const selectUserModal = (state: RootState) => selectUserModalState(state).user;
