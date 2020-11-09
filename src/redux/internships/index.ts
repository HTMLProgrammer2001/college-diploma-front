import {combineReducers} from 'redux';


//internships reducers
import all from './all/reducer';
import edit from './edit/reducer';
import del from './delete/reducer';
import single from './single/reducer';

const internshipsReducer = combineReducers({
	all,
	edit,
	del,
	single
});

export default internshipsReducer;
