import {combineReducers} from 'redux';


//import reducers
import publications from './publications/reducer';
import internships from './internships/reducer';
import qualifications from './qualifications/reducer';

export default combineReducers({
	publications,
	internships,
	qualifications
});
