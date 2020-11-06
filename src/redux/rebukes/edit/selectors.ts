import {RootState} from '../../index';


export const selectEditRebukeState = (state: RootState) => state.rebukes.edit;
export const selectEditRebuke = (state: RootState) => selectEditRebukeState(state).rebuke;
