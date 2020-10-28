import {RootState} from '../../index';


export const selectEditDepartmentState = (state: RootState) => state.departments.edit;
export const selectEditDepartment = (state: RootState) => selectEditDepartmentState(state).department;
