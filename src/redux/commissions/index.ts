import {combineReducers} from 'redux';


//department reducers
import all from './all/reducer';
import edit from './edit/reducer';
import del from './delete/reducer';

const commissionReducer = combineReducers({
	all,
	edit,
	del
});

export default commissionReducer;
