import {RootState} from '../../';


export const selectEducationSingleState = (state: RootState) => state.educations.single;

//@ts-ignore
export const selectEducationSingle = (state: RootState) => selectEducationSingleState(state).education;
