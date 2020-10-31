import {combineReducers} from 'redux';


//ranks reducers
import all from './all/reducer';
import edit from './edit/reducer';
import del from './delete/reducer';

const ranksReducer = combineReducers({
	all,
	edit,
	del
});

export default ranksReducer;
