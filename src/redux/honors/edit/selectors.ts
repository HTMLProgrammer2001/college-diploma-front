import {RootState} from '../../index';


export const selectEditHonorState = (state: RootState) => state.honors.edit;
export const selectEditHonor = (state: RootState) => selectEditHonorState(state).honor;
