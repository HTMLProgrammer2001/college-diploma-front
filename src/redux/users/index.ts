import {combineReducers} from 'redux';


//import users store parts
import modal from './modal/reducer';

const usersReducer = combineReducers({
	modal
});

export default usersReducer;
