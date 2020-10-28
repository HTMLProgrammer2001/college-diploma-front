import {RootState} from '../../index';


export const selectEditCommissionState = (state: RootState) => state.commissions.edit;
export const selectEditCommission = (state: RootState) => selectEditCommissionState(state).commission;
