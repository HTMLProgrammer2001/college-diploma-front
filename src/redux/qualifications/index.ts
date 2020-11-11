import {combineReducers} from 'redux';


//qualifications reducers
import all from './all/reducer';
import edit from './edit/reducer';
import del from './delete/reducer';
import single from './single/reducer';

const qualificationsReducer = combineReducers({all, edit, del, single});
export default qualificationsReducer;
