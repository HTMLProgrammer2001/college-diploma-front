import {RootState} from '../../';


export const selectRebukeSingleState = (state: RootState) => state.rebukes.single;
export const selectRebukeSingle = (state: RootState) => selectRebukeSingleState(state).rebuke;
