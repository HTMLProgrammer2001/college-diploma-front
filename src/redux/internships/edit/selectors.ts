import {RootState} from '../../index';


export const selectEditInternshipState = (state: RootState) => state.internships.edit;
export const selectEditInternship = (state: RootState) => selectEditInternshipState(state).internship;
