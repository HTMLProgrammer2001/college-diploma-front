import {combineReducers} from 'redux';


//rebukes reducers
import all from './all/reducer';
import edit from './edit/reducer';
import del from './delete/reducer';
import single from './single/reducer';

const rebukesReducer = combineReducers({
	all,
	edit,
	del,
	single
});

export default rebukesReducer;
