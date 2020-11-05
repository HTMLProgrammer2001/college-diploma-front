import {RootState} from '../../';


export const selectHonorSingleState = (state: RootState) => state.honors.single;
export const selectHonorSingle = (state: RootState) => selectHonorSingleState(state).honor;
