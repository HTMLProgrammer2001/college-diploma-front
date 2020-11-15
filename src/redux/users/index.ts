import {combineReducers} from 'redux';


//import users store parts
import modal from './modal/reducer';
import all from './all/reducer';
import del from './delete/reducer';

const usersReducer = combineReducers({
	modal,
	all,
	del
});

export default usersReducer;
