import {ME_LOAD_SUCCESS, ME_LOAD_ERROR, ME_LOAD_START} from './types';
import * as actionTypes from './actions';
import {InferActionTypes} from '../';
import {IUser} from '../../interfaces/IUser';


export type IMeActionTypes = InferActionTypes<typeof actionTypes>;

type IMeState = {
	isLoading: boolean,
	error: string,
	user: IUser
};

const initialState: IMeState = {
	isLoading: false,
	error: null,
	user: {
		id: 1,
		fullName: 'Yura Test Testovii',
		birthday: '20.03.2001',
		email: 'cssuperpy@gmail.com',
		address: 'prov Shidnii',
		role: 1,
		experience: 20,
		pedagogicalTitle: 'Vchitel',
		category: 'High',
		commission: 'Random',
		department: 'Test',
		rank: 'Rank',
		avatar: 'http://127.0.0.1:8000/storage/avatars/default.gif'
	}
};

const meReducer = (state = initialState, action: IMeActionTypes): IMeState => {
	switch(action.type){
		case ME_LOAD_START:
			return {isLoading: true, error: null, user: null, ...state};

		case ME_LOAD_ERROR:
			return {isLoading: false, error: action.error, user: null, ...state};

		case ME_LOAD_SUCCESS:
			return {isLoading: false, error: null, user: action.payload, ...state};
	}

	return initialState;
};

export default meReducer;
