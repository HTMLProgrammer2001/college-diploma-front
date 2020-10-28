import {
	DELETE_DEPARTMENT_SUCCESS,
	DELETE_DEPARTMENT_ERROR,
	DELETE_DEPARTMENT_START
} from './types';

import {InferActionTypes} from '../../';

import * as actionsCreators from './actions';


export type IDeleteDepartmentActions = InferActionTypes<typeof actionsCreators>;

type IDeleteDepartmentState = number[];

const initialState: IDeleteDepartmentState = [];

const deleteDepartmentReducer = (state = initialState, action: IDeleteDepartmentActions):
	IDeleteDepartmentState => {

	switch(action.type){
		case DELETE_DEPARTMENT_START:
			return [...state, action.payload];

		case DELETE_DEPARTMENT_ERROR:
			return [...state.filter((id) => id != action.payload)];

		case DELETE_DEPARTMENT_SUCCESS:
			return [...state.filter((id) => id != action.payload)];
	}

	return state;
};

export default deleteDepartmentReducer;
