import {combineReducers} from 'redux';


//ranks reducers
import all from './all/reducer';
import edit from './edit/reducer';
import del from './delete/reducer';
import single from './single/reducer';

const honorsReducer = combineReducers({
	all,
	edit,
	del,
	single
});

export default honorsReducer;
