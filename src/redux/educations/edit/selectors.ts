import {RootState} from '../../index';


export const selectEditEducationState = (state: RootState) => state.educations.edit;
export const selectEditEducation = (state: RootState) => selectEditEducationState(state).education;
