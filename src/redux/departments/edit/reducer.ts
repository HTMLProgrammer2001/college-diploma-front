import {
	EDIT_DEPARTMENT_LOAD_ERROR,
	EDIT_DEPARTMENT_LOAD_SUCCESS,
	EDIT_DEPARTMENT_LOAD_START
} from './types';

import {InferActionTypes} from '../../';
import {IDepartment} from '../../../interfaces/models/IDepartment';

import * as actionsCreators from './actions';


export type IEditDepartmentActions = InferActionTypes<typeof actionsCreators>;

type IEditDepartmentState = {
	isLoading: boolean,
	error: string,
	department: IDepartment
};

const initialState: IEditDepartmentState = {
	isLoading: false,
	error: null,
	department: null
};

const editDepartmentReducer = (state = initialState, action: IEditDepartmentActions): IEditDepartmentState => {
	switch(action.type){
		case EDIT_DEPARTMENT_LOAD_START:
			return {...state, isLoading: true, error: null};

		case EDIT_DEPARTMENT_LOAD_ERROR:
			return {...state, isLoading: false, error: action.error};

		case EDIT_DEPARTMENT_LOAD_SUCCESS:
			return {...state, isLoading: false, error: null, department: action.payload};
	}

	return state;
};

export default editDepartmentReducer;
