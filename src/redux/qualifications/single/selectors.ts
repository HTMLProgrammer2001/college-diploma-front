import {RootState} from '../../';


export const selectQualificationSingleState = (state: RootState) => state.qualifications.single;
export const selectQualificationSingle = (state: RootState) => selectQualificationSingleState(state).qualification;
