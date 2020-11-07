import {RootState} from '../../';


export const selectEducationSingleState = (state: RootState) => state.educations.single;
export const selectEducationSingle = (state: RootState) => selectEducationSingleState(state).education;
