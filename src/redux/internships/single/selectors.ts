import {RootState} from '../../';


export const selectInternshipSingleState = (state: RootState) => state.internships.single;
export const selectInternshipSingle = (state: RootState) => selectInternshipSingleState(state).internship;
