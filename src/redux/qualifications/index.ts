import {combineReducers} from 'redux';

import show from './show/reducer';


const qualificationsState = combineReducers({
	show
});

export default qualificationsState;
