import {RootState} from '../../index';


export const selectEditQualificationState = (state: RootState) => state.qualifications.edit;
// export const selectEditQualification = (state: RootState) => selectEditQualificationState(state).qualification;
